import { errorResponse } from "../utils/apiResponse.js";

export const validateAddSlot = (req, res, next) => {
    const { slotNo } = req.body;

    if (!slotNo || typeof slotNo !== "string" || slotNo.trim() === "") {
        return errorResponse(res, 400, "Slot number is required and must be a non-empty string.");
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(slotNo.trim())) {
        return errorResponse(
            res,
            400,
            "Slot number can only contain letters, numbers, hyphens (-) and underscores (_)."
        );
    }

    next();
};

export const validateParkVehicle = (req, res, next) => {
    const { needsEV, needsCover } = req.body;

    if (needsEV !== undefined && typeof needsEV !== "boolean") {
        return errorResponse(res, 400, "needsEV must be a boolean.");
    }

    if (needsCover !== undefined && typeof needsCover !== "boolean") {
        return errorResponse(res, 400, "needsCover must be a boolean.");
    }

    next();
};
