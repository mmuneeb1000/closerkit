import { useEffect, useState } from "react";
import api from "../api/axios";

import PitchList from "../components/pitches/PitchList";
import PitchModal from "../components/pitches/PitchModal";
import EmptyPitches from "../components/pitches/EmptyPitches";

export default function Pitches() {
  const [pitches, setPitches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedPitch, setSelectedPitch] = useState(null);
  const [showProposal, setShowProposal] = useState(false);

  useEffect(() => {
    getPitches();
  }, []);

  async function getPitches() {
    try {
      setLoading(true);

      const { data } = await api.get("/pitches");

      setPitches(data);
    } catch (err) {
      console.error(err);

      setError("Unable to load pitches.");
    } finally {
      setLoading(false);
    }
  }
  async function handleDeleteAll() {
    if (
      !window.confirm(
        "Delete all saved proposals? This action cannot be undone.",
      )
    ) {
      return;
    }

    try {
      await api.delete("/pitches");

      setPitches([]);
      setSelectedPitch(null);
      setShowProposal(false);
    } catch (err) {
      console.error(err);
    }
  }

  function handleView(pitch) {
    setSelectedPitch(pitch);
    setShowProposal(true);
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/pitches/${id}`);

      setPitches((prev) => prev.filter((pitch) => pitch._id !== id));

      if (selectedPitch?._id === id) {
        setSelectedPitch(null);
        setShowProposal(false);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleRegenerate(pitch) {
    console.log("Regenerate:", pitch);

    // Future implementation:
    // POST /api/pitches/proposal
  }

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-surface">
        <p className="text-muted">Loading pitches...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-surface">
        <p className="text-danger">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex justify-between items-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-text">Saved Proposals</h1>

            <p className="mt-2 text-muted">
              View and manage all AI-generated website proposals.
            </p>
          </div>
          {pitches.length > 0 && (
            <button
              onClick={handleDeleteAll}
              className="rounded-lg border border-red-200 px-5 py-2 text-red-600 transition hover:bg-red-50"
            >
              Delete All
            </button>
          )}
        </div>

        {pitches.length === 0 ? (
          <EmptyPitches />
        ) : (
          <PitchList
            pitches={pitches}
            pitch={selectedPitch}
            onView={handleView}
            onDelete={handleDelete}
          />
        )}

        <PitchModal
          open={showProposal}
          pitch={selectedPitch}
          onClose={() => {
            setShowProposal(false);
            setSelectedPitch(null);
          }}
        />
      </div>
    </section>
  );
}
