import { useState } from "react";

const ToggleRow = ({ id, label, checked, onChange }) => (
    <label htmlFor={id} className="toggle-row">
        <span className="text-sm text-content font-display">{label}</span>
        <div className="relative flex-shrink-0">
            <input id={id} type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
            <div className="w-10 h-5 bg-line rounded-full
        peer-focus:ring-2 peer-focus:ring-brand-500/30
        peer-checked:bg-brand-600
        transition-colors duration-200" />
            <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow
        peer-checked:translate-x-5
        transition-transform duration-200" />
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
                    <ToggleRow id="isCovered" label="🏠 Covered Parking" checked={isCovered} onChange={(e) => setIsCovered(e.target.checked)} />
                    <ToggleRow id="isEVCharging" label="⚡ EV Charging" checked={isEVCharging} onChange={(e) => setIsEVCharging(e.target.checked)} />
                </div>

                <button type="submit" disabled={loading || !slotNo.trim()} className="btn-primary">
                    {loading ? "Adding…" : "+ Add Slot"}
                </button>
            </form>
        </section>
    );
};

export default AddSlotForm;
