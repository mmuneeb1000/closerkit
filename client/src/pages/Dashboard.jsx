import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

import {
  FiFolder,
  FiFileText,
  FiTrendingUp,
  FiArrowRight,
  FiClock,
} from "react-icons/fi";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState({
    projects: 0,
    proposals: 0,
    recentActivity: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getDashboard();
  }, []);

  async function getDashboard() {
    try {
      const { data } = await api.get("/dashboard");

      setDashboard(data);
    } catch (err) {
      console.error(err);
      setError("Unable to load dashboard.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="min-h-screen bg-surface flex items-center justify-center">
        <p className="text-muted">Loading dashboard...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-surface flex items-center justify-center">
        <p className="text-danger">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-text">Dashboard</h1>

          <p className="mt-2 text-muted">
            Welcome back. Here's an overview of your activity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-primary">
              <FiFolder size={24} />
            </div>

            <h2 className="text-xl font-semibold text-text">Projects</h2>

            <p className="mt-2 text-muted">Total client projects.</p>

            <p className="mt-6 text-4xl font-bold text-primary">
              {dashboard.projects}
            </p>

            <Link
              to="/projects"
              className="mt-5 inline-flex items-center gap-2 text-primary hover:underline"
            >
              View Projects
              <FiArrowRight />
            </Link>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-primary">
              <FiFileText size={24} />
            </div>

            <h2 className="text-xl font-semibold text-text">AI Proposals</h2>

            <p className="mt-2 text-muted">Total proposals generated.</p>

            <p className="mt-6 text-4xl font-bold text-primary">
              {dashboard.proposals}
            </p>

            <Link
              to="/pitches"
              className="mt-5 inline-flex items-center gap-2 text-primary hover:underline"
            >
              View Proposals
              <FiArrowRight />
            </Link>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-primary">
              <FiTrendingUp size={24} />
            </div>

            <h2 className="text-xl font-semibold text-text">Recent Activity</h2>

            <div className="mt-5 space-y-4">
              {dashboard.recentActivity.length === 0 ? (
                <p className="text-muted">No recent activity.</p>
              ) : (
                dashboard.recentActivity.map((pitch) => (
                  <div
                    key={pitch._id}
                    className="border-b pb-3 last:border-none"
                  >
                    <p className="font-medium text-text">
                      {pitch.project?.businessName}
                    </p>

                    <div className="mt-1 flex items-center gap-2 text-sm text-muted">
                      <FiClock size={14} />
                      {new Date(pitch.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
