import mongoose from "mongoose";

const parkingSlotSchema = new mongoose.Schema(
    {
        slotNo: {
            type: String,
            required: [true, "Slot number is required"],
            unique: true,
            trim: true,
            uppercase: true,
        },
        isCovered: {
            type: Boolean,
            default: false,
        },
        isEVCharging: {
            type: Boolean,
            default: false,
        },
        isOccupied: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("ParkingSlot", parkingSlotSchema);
