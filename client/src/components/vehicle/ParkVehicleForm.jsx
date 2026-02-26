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
                    ? "bg-green-600 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.35)]"
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
                    <svg className="w-3 h-3 text-green-600" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>
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
                <ToggleRow id="needsEV" label={<span className="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>Needs EV Charging</span>} checked={needsEV} onChange={(e) => setNeedsEV(e.target.checked)} />
                <ToggleRow id="needsCover" label={<span className="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>Needs Covered Slot</span>} checked={needsCover} onChange={(e) => setNeedsCover(e.target.checked)} />

                <button type="submit" disabled={loading} className="btn-success mt-1">
                    {loading ? "Finding slot…" : <span className="flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 5v3h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>Park Vehicle</span>}
                </button>
            </form>
        </section>
    );
};

export default ParkVehicleForm;
