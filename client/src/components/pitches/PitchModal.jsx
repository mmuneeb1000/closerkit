import { FiClipboard, FiDownload } from "react-icons/fi";
import Modal from "../common/Modal";

export default function PitchModal({ open, onClose, pitch }) {
  if (!pitch) return null;
  async function copyProposal() {
    await navigator.clipboard.writeText(proposal || "");
  }

  return (
    <Modal isOpen={open} onClose={onClose} title={pitch.project?.businessName}>
      <div className="max-h-[70vh] overflow-y-auto whitespace-pre-wrap leading-8">
        {pitch.response}
      </div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={copyProposal}
          className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white"
        >
          <FiClipboard />
          Copy
        </button>

        <button className="flex items-center gap-2 rounded-lg border px-4 py-2">
          <FiDownload />
          <span>Download</span>
        </button>
      </div>
    </Modal>
  );
}
