import { useState } from "react";
import { formatSlotOption } from "../../utils/helpers.js";

const RemoveVehicleForm = ({ slots, onRemove }) => {
    const [selectedId, setSelectedId] = useState("");
    const [loading, setLoading] = useState(false);

    const occupied = slots.filter((s) => s.isOccupied);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedId) return;
        setLoading(true);
        await onRemove(selectedId);
        setLoading(false);
        setSelectedId("");
    };

    return (
        <section className="card p-5">
            <h2 className="section-title">Remove Vehicle</h2>
            <p className="text-xs text-content-subtle -mt-2 mb-4 font-display">
                Free up an occupied parking slot.
            </p>

            {occupied.length === 0 ? (
                <div className="flex flex-col items-center py-5 gap-2 text-center">
                    <span className="text-3xl opacity-20">✅</span>
                    <p className="text-sm text-content-subtle font-display">No occupied slots right now.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label htmlFor="slotSelect" className="label-sm">Select Slot</label>
                        <select
                            id="slotSelect"
                            value={selectedId}
                            onChange={(e) => setSelectedId(e.target.value)}
                            className="form-input cursor-pointer"
                        >
                            <option value="">— Choose an occupied slot —</option>
                            {occupied.map((s) => (
                                <option key={s._id} value={s._id}>
                                    {formatSlotOption(s)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" disabled={!selectedId || loading} className="btn-danger">
                        {loading ? "Removing…" : "🔓 Free Slot"}
                    </button>
                </form>
            )}
        </section>
    );
};

export default RemoveVehicleForm;
