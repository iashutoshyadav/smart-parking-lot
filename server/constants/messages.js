const MESSAGES = {
    SLOT_ADDED: "Slot added successfully",
    SLOT_DELETED: "Slot deleted successfully",
    SLOT_NOT_FOUND: "Slot not found",
    SLOT_ALREADY_EXISTS: "Slot number already exists",
    SLOT_OCCUPIED_DELETE: "Cannot delete an occupied slot. Remove the vehicle first.",
    VEHICLE_PARKED: (slotNo) => `Vehicle parked at slot ${slotNo}`,
    VEHICLE_REMOVED: (slotNo) => `Vehicle removed from slot ${slotNo}`,
    NO_SLOT_AVAILABLE: "No slot available",
    SLOT_ALREADY_FREE: "Slot is already free",
};

export default MESSAGES;
