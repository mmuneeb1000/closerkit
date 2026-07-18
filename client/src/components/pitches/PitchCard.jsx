import { useState } from "react";
import { FiEye, FiTrash2, FiCalendar, FiCopy, FiCheck } from "react-icons/fi";

export default function PitchCard({ pitch, onView, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(pitch.response);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <article className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-text">
            {pitch.project?.businessName}
          </h2>

          <p className="text-sm text-muted">{pitch.project?.industry}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted">
          <FiCalendar />
          {new Date(pitch.createdAt).toLocaleDateString()}
        </div>
      </div>

      <div className="mt-5 rounded-lg bg-gray-50 p-4">
        <p
          className={`whitespace-pre-wrap text-sm leading-7 text-muted ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {pitch.response}
        </p>

        {pitch.response.length > 220 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-sm font-medium text-primary hover:underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => onView(pitch)}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white"
        >
          <FiEye />
          View
        </button>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          {copied ? <FiCheck /> : <FiCopy />}
          {copied ? "Copied" : "Copy"}
        </button>

        <button
          onClick={() => onDelete(pitch._id)}
          className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-danger hover:bg-red-50"
        >
          <FiTrash2 />
          Delete
        </button>
      </div>
    </article>
  );
}
