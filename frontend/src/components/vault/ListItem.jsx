export default function ListItem({ url, onEdit, onReveal, className = "" }) {
  return (
    <div
      className={`grid grid-cols-[1fr_auto_auto] items-center gap-2
                     border border-yellow-400/60 rounded-md overflow-hidden ${className}`}
    >
      <div className="px-3 py-3 text-white truncate">{url}</div>
      <button
        type="button"
        onClick={onEdit}
        className="px-3 py-3 border-l border-yellow-400/50 hover:bg-white/10"
      >
        ✏️
      </button>
      <button
        type="button"
        onClick={onReveal}
        className="px-3 py-3 border-l border-yellow-400/50 hover:bg-white/10"
      >
        👁️
      </button>
    </div>
  );
}
