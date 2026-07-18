import { useState } from "react";
import { FiCalendar, FiCopy, FiCheck, FiTrash2 } from "react-icons/fi";

export default function PitchCard({ pitch, onView, onDelete }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e) {
    e.stopPropagation();

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

  function handleDelete(e) {
    e.stopPropagation();
    onDelete(pitch._id);
  }

  return (
    <article
      onClick={() => onView(pitch)}
      className="cursor-pointer rounded-xl border bg-white p-5 shadow-sm transition hover:border-primary hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-text">
            {pitch.project?.businessName}
          </h2>

          <p className="mt-1 text-sm text-muted">{pitch.project?.industry}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted">
          <FiCalendar />
          <span>{new Date(pitch.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-gray-50 p-4">
        <p className="line-clamp-4 whitespace-pre-wrap text-sm leading-7 text-muted">
          {pitch.response}
        </p>
      </div>

      <div
        className="mt-5 flex items-center justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm font-medium text-primary">
          Click anywhere to read the full proposal
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-lg border px-4 py-2 transition hover:bg-gray-100"
          >
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? "Copied" : "Copy"}
          </button>

          <button
            onClick={handleDelete}
            className="rounded-lg border border-red-200 p-2 text-danger transition hover:bg-red-50"
            title="Delete Proposal"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </article>
  );
}
