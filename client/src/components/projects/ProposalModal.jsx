import Modal from "../common/Modal";
import { FiClipboard, FiDownload } from "react-icons/fi";

export default function ProposalModal({ open, onClose, proposal }) {
  async function copyProposal() {
    await navigator.clipboard.writeText(proposal || "");
  }

  return (
    <Modal isOpen={open} onClose={onClose} title="Generated Proposal">
      <div className="rounded-lg bg-gray-50 p-5 whitespace-pre-wrap">
        {proposal}
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
          Download
        </button>
      </div>
    </Modal>
  );
}
