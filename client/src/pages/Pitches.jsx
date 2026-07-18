import { useEffect, useState } from "react";
import api from "../api/axios";

import PitchList from "../components/pitches/PitchList";
import ProposalModal from "../components/projects/ProposalModal";
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text">Saved Proposals</h1>

          <p className="mt-2 text-muted">
            View and manage all AI-generated website proposals.
          </p>
        </div>

        {pitches.length === 0 ? (
          <EmptyPitches />
        ) : (
          <PitchList
            pitches={pitches}
            onView={handleView}
            onDelete={handleDelete}
          />
        )}

        <ProposalModal
          open={showProposal}
          pitch={selectedPitch}
          onClose={() => {
            setShowProposal(false);
            setSelectedPitch(null);
          }}
          onDelete={handleDelete}
          onRegenerate={handleRegenerate}
        />
      </div>
    </section>
  );
}
