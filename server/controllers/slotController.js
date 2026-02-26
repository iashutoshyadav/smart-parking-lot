import ParkingSlot from "../models/ParkingSlot.js";
import MESSAGES from "../constants/messages.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const getAllSlots = async (req, res, next) => {
    try {
        const slots = await ParkingSlot.find().sort({ createdAt: 1 });
        return successResponse(res, 200, "Slots fetched successfully", slots);
    } catch (err) {
        next(err);
    }
};

export const addSlot = async (req, res, next) => {
    try {
        const { slotNo, isCovered = false, isEVCharging = false } = req.body;

        const existing = await ParkingSlot.findOne({
            slotNo: slotNo.trim().toUpperCase(),
        });
        if (existing) {
            return errorResponse(res, 409, MESSAGES.SLOT_ALREADY_EXISTS);
        }

        const slot = await ParkingSlot.create({
            slotNo: slotNo.trim().toUpperCase(),
            isCovered,
            isEVCharging,
            isOccupied: false,
        });

        return successResponse(res, 201, MESSAGES.SLOT_ADDED, slot);
    } catch (err) {
        next(err);
    }
};

export const parkVehicle = async (req, res, next) => {
    try {
        const { needsEV = false, needsCover = false } = req.body;

        const filter = { isOccupied: false };
        if (needsEV) filter.isEVCharging = true;
        if (needsCover) filter.isCovered = true;

        const slot = await ParkingSlot.findOne(filter).sort({ createdAt: 1 });
        if (!slot) {
            return errorResponse(res, 404, MESSAGES.NO_SLOT_AVAILABLE);
        }

        slot.isOccupied = true;
        await slot.save();

        return successResponse(res, 200, MESSAGES.VEHICLE_PARKED(slot.slotNo), slot);
    } catch (err) {
        next(err);
    }
};

export const removeVehicle = async (req, res, next) => {
    try {
        const slot = await ParkingSlot.findById(req.params.id);
        if (!slot) {
            return errorResponse(res, 404, MESSAGES.SLOT_NOT_FOUND);
        }

        if (!slot.isOccupied) {
            return errorResponse(res, 400, MESSAGES.SLOT_ALREADY_FREE);
        }

        slot.isOccupied = false;
        await slot.save();

        return successResponse(res, 200, MESSAGES.VEHICLE_REMOVED(slot.slotNo), slot);
    } catch (err) {
        next(err);
    }
};

export const deleteSlot = async (req, res, next) => {
    try {
        const slot = await ParkingSlot.findById(req.params.id);
        if (!slot) {
            return errorResponse(res, 404, MESSAGES.SLOT_NOT_FOUND);
        }

        if (slot.isOccupied) {
            return errorResponse(res, 400, MESSAGES.SLOT_OCCUPIED_DELETE);
        }

        await slot.deleteOne();
        return successResponse(res, 200, MESSAGES.SLOT_DELETED);
    } catch (err) {
        next(err);
    }
};
