import { useState } from "react";

const ToggleRow = ({ id, label, checked, onChange }) => (
    <label htmlFor={id} className="toggle-row">
        <span className="text-sm text-content font-display">{label}</span>
        <div className="relative flex-shrink-0">
            <input id={id} type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
            <div className="w-10 h-5 bg-line rounded-full
        peer-focus:ring-2 peer-focus:ring-success/30
        peer-checked:bg-success
        transition-colors duration-200" />
            <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow
        peer-checked:translate-x-5
        transition-transform duration-200" />
        </div>
    </label>
);

const ParkVehicleForm = ({ onPark }) => {
    const [needsEV, setNeedsEV] = useState(false);
    const [needsCover, setNeedsCover] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await onPark({ needsEV, needsCover });
        setLoading(false);
    };

    return (
        <section className="card p-5">
            <h2 className="section-title">Park Vehicle</h2>
            <p className="text-xs text-content-subtle -mt-2 mb-4 font-display">
                Auto-assigns the nearest available matching slot.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
                <ToggleRow id="needsEV" label="⚡ Needs EV Charging" checked={needsEV} onChange={(e) => setNeedsEV(e.target.checked)} />
                <ToggleRow id="needsCover" label="🏠 Needs Covered Slot" checked={needsCover} onChange={(e) => setNeedsCover(e.target.checked)} />

                <button type="submit" disabled={loading} className="btn-success mt-1">
                    {loading ? "Finding slot…" : "🚗 Park Vehicle"}
                </button>
            </form>
        </section>
    );
};

export default ParkVehicleForm;
