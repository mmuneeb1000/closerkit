import { Link } from "react-router-dom";
import {
  FiFolder,
  FiFileText,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-text">Dashboard</h1>

          <p className="mt-2 text-muted">
            Welcome back. Manage projects and generate AI-powered pitches.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-primary">
              <FiFolder size={24} />
            </div>

            <h2 className="text-xl font-semibold text-text">Projects</h2>

            <p className="mt-2 text-muted">
              Create and manage your client projects.
            </p>

            <Link
              to="/projects"
              className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
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

            <p className="mt-2 text-muted">
              Generate personalized website proposals using OpenAI.
            </p>

            <p className="mt-6 text-3xl font-bold text-primary">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-primary">
              <FiTrendingUp size={24} />
            </div>

            <h2 className="text-xl font-semibold text-text">Activity</h2>

            <p className="mt-2 text-muted">
              Your recent AI generations will appear here.
            </p>

            <p className="mt-6 text-3xl font-bold text-primary">0</p>
          </div>
        </div>
      </div>
    </section>
  );
}
