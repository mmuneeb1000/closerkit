import { Link } from "react-router-dom";
import { FiLock, FiArrowRight } from "react-icons/fi";

export default function AuthRequired() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-surface px-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-10 text-center shadow-lg">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-primary">
          <FiLock size={36} />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-text">
          Sign in to continue
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-muted">
          Create projects, generate AI-powered website proposals, save proposal
          history, and manage all your client outreach from one dashboard.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/login"
            className="rounded-xl bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-800"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-50"
          >
            Create Account
          </Link>
        </div>

        <div className="mt-10 grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-gray-50 p-4">
            <h3 className="font-semibold">Manage Projects</h3>
            <p className="mt-2 text-sm text-muted">
              Organize businesses, notes, websites, and prospects.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <h3 className="font-semibold">Generate AI Proposals</h3>
            <p className="mt-2 text-sm text-muted">
              Create personalized website proposals in seconds.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <h3 className="font-semibold">Proposal History</h3>
            <p className="mt-2 text-sm text-muted">
              Every generated proposal is saved automatically.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <h3 className="font-semibold">Secure Workspace</h3>
            <p className="mt-2 text-sm text-muted">
              Your projects remain private and protected.
            </p>
          </div>
        </div>

        <Link
          to="/register"
          className="mt-10 inline-flex items-center gap-2 text-primary hover:underline"
        >
          Get started for free
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
