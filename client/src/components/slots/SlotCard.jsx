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
                {isCovered && <Badge label={<span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>Covered</span>} variant="blue" />}
                {isEVCharging && <Badge label={<span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>EV</span>} variant="yellow" />}
            </div>

            {isOccupied && (
                <button
                    onClick={() => onRemove(_id)}
                    className="mt-auto mx-3 py-2 rounded-xl border border-danger/40 text-danger text-sm
            font-semibold font-display hover:bg-danger/10 hover:border-danger/60
            transition-colors active:scale-[.97]"
                >
                    <span className="flex items-center justify-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>Free Slot</span>
                </button>
            )}
        </div>
    );
};

export default SlotCard;
