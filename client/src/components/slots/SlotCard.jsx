import Badge from "../common/Badge.jsx";

const SlotCard = ({ slot, onDelete, onRemove }) => {
    const { _id, slotNo, isCovered, isEVCharging, isOccupied } = slot;

    return (
        <div
            className={`group relative rounded-2xl border p-4 flex flex-col gap-3
        transition-all duration-200 ease-out animate-slide-up
        hover:-translate-y-1
        ${isOccupied
                    ? "bg-surface-card border-danger/25  hover:shadow-glow-red-lg"
                    : "bg-surface-card border-success/20 hover:shadow-glow-green-lg"
                }`}
        >
            <div className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-full
        ${isOccupied ? "bg-danger" : "bg-success"}`} />

            <div className="flex items-start justify-between pl-3">
                <div
                    className={`inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3
            rounded-xl font-mono font-bold text-sm
            ${isOccupied ? "bg-danger/10 text-danger" : "bg-success/10 text-success"}`}
                >
                    {slotNo}
                </div>

                <button
                    onClick={() => onDelete(_id)}
                    aria-label={`Delete slot ${slotNo}`}
                    className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-content-subtle
            hover:bg-danger/10 hover:text-danger transition-all duration-150 text-lg leading-none"
                >
                    ×
                </button>
            </div>

            <div className="flex flex-wrap gap-1.5 pl-3">
                {isOccupied ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-danger">
                        <span className="w-1.5 h-1.5 rounded-full bg-danger" />
                        Occupied
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
                        Free
                    </span>
                )}
                {isCovered && <Badge label="🏠 Covered" variant="blue" />}
                {isEVCharging && <Badge label="⚡ EV" variant="yellow" />}
            </div>

            {isOccupied && (
                <button
                    onClick={() => onRemove(_id)}
                    className="mt-auto mx-3 py-2 rounded-xl border border-danger/40 text-danger text-sm
            font-semibold font-display hover:bg-danger/10 hover:border-danger/60
            transition-colors active:scale-[.97]"
                >
                    🔓 Free Slot
                </button>
            )}
        </div>
    );
};

export default SlotCard;
