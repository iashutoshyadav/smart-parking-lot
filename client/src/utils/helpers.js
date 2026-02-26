export const filterSlots = (slots, filter) => {
    switch (filter) {
        case "free": return slots.filter((s) => !s.isOccupied);
        case "occupied": return slots.filter((s) => s.isOccupied);
        case "ev": return slots.filter((s) => s.isEVCharging);
        case "covered": return slots.filter((s) => s.isCovered);
        default: return slots;
    }
};

export const computeStats = (slots) => ({
    total: slots.length,
    free: slots.filter((s) => !s.isOccupied).length,
    occupied: slots.filter((s) => s.isOccupied).length,
    ev: slots.filter((s) => s.isEVCharging).length,
    covered: slots.filter((s) => s.isCovered).length,
});

export const formatSlotOption = (slot) => {
    const tags = [
        slot.isCovered && "Covered",
        slot.isEVCharging && "EV ⚡",
    ].filter(Boolean);
    return tags.length ? `${slot.slotNo} — ${tags.join(", ")}` : slot.slotNo;
};
