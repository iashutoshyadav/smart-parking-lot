import { useState } from "react";

const ToggleRow = ({ id, label, checked, onChange }) => (
    <label htmlFor={id} className="toggle-row group cursor-pointer">
        <span className={`text-sm font-display transition-colors duration-200 ${checked ? "text-content" : "text-content-muted"}`}>
            {label}
        </span>
        <div className="relative flex-shrink-0">
            <input id={id} type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
            {/* Track */}
            <div className={`w-11 h-6 rounded-full border transition-all duration-300
                ${checked
                    ? "bg-brand-600 border-brand-500 shadow-[0_0_10px_rgba(99,102,241,0.4)]"
                    : "bg-surface border-[#2d3148]"
                }`}
            />
            {/* Thumb */}
            <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md
                transition-all duration-300 ease-in-out
                flex items-center justify-center
                ${checked
                    ? "translate-x-5 bg-white"
                    : "translate-x-0 bg-[#4a5070]"
                }`}
            >
                {checked && (
                    <svg className="w-3 h-3 text-brand-600" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>
        </div>
    </label>
);

const AddSlotForm = ({ onAdd }) => {
    const [slotNo, setSlotNo] = useState("");
    const [isCovered, setIsCovered] = useState(false);
    const [isEVCharging, setIsEVCharging] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!slotNo.trim()) { setError("Slot number is required."); return; }
        setLoading(true);
        const ok = await onAdd({ slotNo: slotNo.trim().toUpperCase(), isCovered, isEVCharging });
        setLoading(false);
        if (ok) { setSlotNo(""); setIsCovered(false); setIsEVCharging(false); }
    };

    return (
        <section className="card p-5">
            <h2 className="section-title">Add Parking Slot</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="slotNo" className="label-sm">
                        Slot Number <span className="text-danger normal-case tracking-normal">*</span>
                    </label>
                    <input
                        id="slotNo"
                        type="text"
                        value={slotNo}
                        onChange={(e) => { setSlotNo(e.target.value); setError(""); }}
                        placeholder="e.g. A1, B-3, P101"
                        maxLength={10}
                        className={`form-input uppercase ${error ? "border-danger/60 focus:ring-danger/30 focus:border-danger" : ""}`}
                    />
                    {error ? (
                        <p className="mt-1.5 text-xs text-danger flex items-center gap-1">⚠ {error}</p>
                    ) : (
                        <p className="mt-1.5 text-xs text-content-subtle">Letters, numbers, hyphens and underscores only.</p>
                    )}
                </div>

                <div className="space-y-2">
                    <p className="label-sm">Features</p>
                    <ToggleRow id="isCovered" label={<span className="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>Covered Parking</span>} checked={isCovered} onChange={(e) => setIsCovered(e.target.checked)} />
                    <ToggleRow id="isEVCharging" label={<span className="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>EV Charging</span>} checked={isEVCharging} onChange={(e) => setIsEVCharging(e.target.checked)} />
                </div>

                <button type="submit" disabled={loading || !slotNo.trim()} className="btn-primary">
                    {loading ? "Adding…" : "+ Add Slot"}
                </button>
            </form>
        </section>
    );
};

export default AddSlotForm;
