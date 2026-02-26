import express from "express";
import {
    getAllSlots,
    addSlot,
    parkVehicle,
    removeVehicle,
    deleteSlot,
} from "../controllers/slotController.js";
import {
    validateAddSlot,
    validateParkVehicle,
} from "../middleware/validateSlot.js";

const router = express.Router();

router.get("/", getAllSlots);
router.post("/", validateAddSlot, addSlot);
router.post("/park", validateParkVehicle, parkVehicle);
router.patch("/:id/remove", removeVehicle);
router.delete("/:id", deleteSlot);

export default router;
