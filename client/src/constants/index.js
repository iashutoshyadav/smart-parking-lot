export const SLOT_STATUS = {
    FREE: "Free",
    OCCUPIED: "Occupied",
};

export const FILTERS = [
    { label: "All", value: "all" },
    { label: "Free", value: "free" },
    { label: "Occupied", value: "occupied" },
    { label: "EV ⚡", value: "ev" },
    { label: "Covered", value: "covered" },
];

export const ACTION_CONFIG = {
    ADD: { icon: "➕", label: "Added", colorClass: "text-brand-600" },
    PARK: { icon: "🚗", label: "Parked", colorClass: "text-success" },
    REMOVE: { icon: "🔓", label: "Freed", colorClass: "text-warning" },
    DELETE: { icon: "🗑️", label: "Deleted", colorClass: "text-danger" },
};
