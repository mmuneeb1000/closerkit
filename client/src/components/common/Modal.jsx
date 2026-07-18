export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-xl bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-text">{title}</h2>

          <button
            onClick={onClose}
            className="text-2xl text-muted hover:text-text"
          >
            ×
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
