import { useState } from "react";
import SlotCard from "./SlotCard.jsx";
import Loader from "../common/Loader.jsx";
import { filterSlots } from "../../utils/helpers.js";
import { FILTERS } from "../../constants/index.js";

const SlotGrid = ({ slots, loading, onDelete, onRemove }) => {
    const [activeFilter, setActiveFilter] = useState("all");

    const visible = filterSlots(slots, activeFilter);

    return (
        <div className="card p-5 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
                <h2 className="section-title mb-0">All Parking Slots</h2>
                <span className="text-xs text-content-subtle bg-surface-muted border border-line px-2.5 py-1 rounded-full font-mono">
                    {visible.length} / {slots.length}
                </span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
                {FILTERS.map(({ label, value }) => (
                    <button
                        key={value}
                        onClick={() => setActiveFilter(value)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold font-display transition-all duration-150
              ${activeFilter === value
                                ? "bg-brand-600 text-white shadow-glow-brand"
                                : "bg-surface-muted border border-line text-content-muted hover:bg-surface-elevated hover:text-content"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {loading ? (
                <Loader text="Loading slots..." />
            ) : visible.length === 0 ? (
                <div className="flex flex-col items-center justify-center flex-1 py-12 text-center gap-2">
                    <span className="text-4xl opacity-20">🅿️</span>
                    <p className="text-sm text-content-subtle font-display">
                        {slots.length === 0
                            ? "No slots added yet. Use the form to add one."
                            : "No slots match this filter."}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto max-h-[520px] pr-0.5">
                    {visible.map((slot) => (
                        <SlotCard
                            key={slot._id}
                            slot={slot}
                            onDelete={onDelete}
                            onRemove={onRemove}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SlotGrid;
