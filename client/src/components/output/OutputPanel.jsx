import { ACTION_CONFIG } from "../../constants/index.js";

const DetailRow = ({ label, value }) => (
    <>
        <span className="text-content-subtle">{label}</span>
        <span className="text-content font-medium font-mono">{value}</span>
    </>
);

const OutputPanel = ({ lastAction, stats }) => {
    const cfg = lastAction ? ACTION_CONFIG[lastAction.type] : null;

    const statItems = [
        { label: "Total", value: stats.total, color: "text-brand-400" },
        { label: "Free", value: stats.free, color: "text-success" },
        { label: "Occupied", value: stats.occupied, color: "text-danger" },
        { label: "EV Slots", value: stats.ev, color: "text-warning" },
    ];

    return (
        <div className="card p-5 space-y-5 animate-fade-in">
            <h2 className="section-title mb-0">Output Panel</h2>

            <div>
                <p className="label-sm mb-2">Live Statistics</p>
                <div className="grid grid-cols-2 gap-2.5">
                    {statItems.map(({ label, value, color }) => (
                        <div key={label} className="stat-card">
                            <p className={`text-2xl font-bold font-mono ${color}`}>{value}</p>
                            <p className="text-xs text-content-subtle mt-0.5 font-display">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className="label-sm mb-2">Last Action</p>

                {!lastAction ? (
                    <div className="bg-surface-muted rounded-xl p-5 text-center border border-line">
                        <p className="text-sm text-content-subtle font-display">
                            No action yet — add a slot or park a vehicle.
                        </p>
                    </div>
                ) : (
                    <div
                        className={`rounded-xl border p-4 animate-slide-up relative overflow-hidden
              ${lastAction.success
                                ? "bg-success/5 border-success/25"
                                : "bg-danger/5  border-danger/25"
                            }`}
                    >
                        <div className={`absolute left-0 top-0 bottom-0 w-0.5
              ${lastAction.success ? "bg-success" : "bg-danger"}`} />

                        <div className="flex items-center justify-between mb-2 pl-2">
                            <span className={`text-sm font-bold font-display ${cfg.colorClass}`}>
                                {cfg.icon} {cfg.label}
                            </span>
                            <div className="flex items-center gap-2">
                                {lastAction.time && (
                                    <span className="text-xs text-content-subtle font-mono">{lastAction.time}</span>
                                )}
                                <span
                                    className={`text-xs font-semibold px-2 py-0.5 rounded-full
                    ${lastAction.success
                                            ? "bg-success/15 text-success"
                                            : "bg-danger/15  text-danger"
                                        }`}
                                >
                                    {lastAction.success ? "✓ Success" : "✗ Failed"}
                                </span>
                            </div>
                        </div>

                        <p className="text-sm text-content mb-3 pl-2">{lastAction.message}</p>

                        {lastAction.slot && (
                            <div className="bg-surface-card rounded-xl border border-line p-3 ml-2">
                                <p className="label-sm mb-2">Slot Details</p>
                                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-xs">
                                    <DetailRow label="Slot No" value={lastAction.slot.slotNo} />
                                    <DetailRow label="Status" value={lastAction.slot.isOccupied ? "Occupied" : "Free"} />
                                    <DetailRow label="Covered" value={lastAction.slot.isCovered ? "Yes" : "No"} />
                                    <DetailRow label="EV Charging" value={lastAction.slot.isEVCharging ? "Yes" : "No"} />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OutputPanel;
