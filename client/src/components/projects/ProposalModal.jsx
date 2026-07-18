import Modal from "../common/Modal";
import { FiClipboard, FiDownload } from "react-icons/fi";

export default function ProposalModal({ open, onClose, proposal }) {
  async function copyProposal() {
    await navigator.clipboard.writeText(proposal || "");
  }

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title={proposal ? "Generated Proposal" : "Generating Proposal..."}
    >
      {!proposal ? (
        <div className="animate-pulse space-y-4">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
          <div className="h-4 w-2/3 rounded bg-gray-200" />

          <p className="pt-4 text-sm text-muted">
            This usually takes a few seconds...
          </p>
        </div>
      ) : (
        <>
          <div className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap rounded-lg bg-gray-50 p-5">
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
              <span>Download</span>
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}
