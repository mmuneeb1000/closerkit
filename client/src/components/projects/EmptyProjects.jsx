import { FiFolderPlus } from "react-icons/fi";

export default function EmptyProjects() {
  return (
    <div className="rounded-xl bg-white px-8 py-16 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-primary">
        <FiFolderPlus size={36} />
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-text">No Projects Yet</h2>

      <p className="mx-auto mt-3 max-w-md text-muted">
        Create your first project to start generating AI-powered website
        proposals and client pitches.
      </p>
    </div>
  );
}
