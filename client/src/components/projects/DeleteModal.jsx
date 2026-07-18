import Modal from "../common/Modal";

export default function DeleteModal({ open, onClose, onConfirm, project }) {
  return (
    <Modal isOpen={open} onClose={onClose} title="Delete Project">
      <p className="text-muted">
        Are you sure you want to delete <strong>{project?.businessName}</strong>
        ?
      </p>

      <p className="mt-2 text-sm text-danger">This action cannot be undone.</p>

      <div className="mt-8 flex justify-end gap-3">
        <button onClick={onClose} className="rounded-lg border px-5 py-2">
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="rounded-lg bg-danger px-5 py-2 text-white"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
