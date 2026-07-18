import { useState } from "react";
import {
  FiCalendar,
  FiCopy,
  FiCheck,
  FiTrash2,
  FiEye,
  FiFileText,
} from "react-icons/fi";

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
      className="group flex cursor-pointer gap-5 border-b bg-white p-5 transition hover:bg-gray-50"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
          <FiFileText />
        </div>

        <div className="mt-2 h-full w-px bg-gray-200" />
      </div>

      <div className="flex-1">
        <div className="flex flex-col justify-between gap-3 md:flex-row">
          <div>
            <h2 className="font-semibold text-text">
              {pitch.project?.businessName || "Unknown Project"}
            </h2>

            <p className="text-sm text-muted">{pitch.project?.industry}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted">
            <FiCalendar />
            {new Date(pitch.createdAt).toLocaleDateString()}
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <p className="line-clamp-3 whitespace-pre-wrap text-sm leading-6 text-muted">
            {pitch.response}
          </p>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onView(pitch);
            }}
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
          >
            <FiEye />
            View
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-gray-100"
          >
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? "Copied" : "Copy"}
          </button>

          <button
            onClick={handleDelete}
            className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </article>
  );
}
