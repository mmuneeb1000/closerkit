import { FiClipboard, FiRefreshCw, FiDownload, FiTrash2 } from "react-icons/fi";

export default function PitchToolbar({
  pitch,
  onCopy,
  onDownload,
  onRegenerate,
  onDelete,
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={() => onCopy(pitch)}
        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white"
      >
        <FiClipboard />
        Copy
      </button>

      <button
        onClick={() => onDownload(pitch)}
        className="flex items-center gap-2 rounded-lg border px-4 py-2"
      >
        <FiDownload />
        Download
      </button>

      <button
        onClick={() => onRegenerate(pitch)}
        className="flex items-center gap-2 rounded-lg border px-4 py-2"
      >
        <FiRefreshCw />
        Regenerate
      </button>

      <button
        onClick={() => onDelete(pitch._id)}
        className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-danger"
      >
        <FiTrash2 />
        Delete
      </button>
    </div>
  );
}
