import { FiFileText, FiEye, FiTrash2, FiCalendar } from "react-icons/fi";

export default function PitchCard({ pitch, onView, onDelete }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-primary">
          <FiFileText size={22} />
        </div>

        <div>
          <h2 className="font-semibold text-text">
            {pitch.project?.businessName}
          </h2>

          <p className="text-sm text-muted">{pitch.project?.industry}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted">
        <FiCalendar />
        {new Date(pitch.createdAt).toLocaleDateString()}
      </div>

      <p className="mt-4 line-clamp-3 text-sm text-muted">{pitch.response}</p>

      <div className="mt-6 flex gap-2">
        <button
          onClick={() => onView(pitch)}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white"
        >
          <FiEye />
          View
        </button>

        <button
          onClick={() => onDelete(pitch._id)}
          className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-danger"
        >
          <FiTrash2 />
          Delete
        </button>
      </div>
    </article>
  );
}
