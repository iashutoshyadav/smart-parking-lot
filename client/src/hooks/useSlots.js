import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import slotService from "../services/slotService.js";
import { computeStats } from "../utils/helpers.js";

const useSlots = () => {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lastAction, setLastAction] = useState(null);

    const setAction = (type, message, success, slot = null) =>
        setLastAction({
            type,
            message,
            success,
            slot,
            time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        });

    const fetchSlots = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await slotService.getAll();
            setSlots(data.data);
        } catch {
            toast.error("Failed to load slots. Is the server running?");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchSlots(); }, [fetchSlots]);

    const addSlot = async (formData) => {
        try {
            const { data } = await slotService.addSlot(formData);
            setSlots((prev) => [...prev, data.data]);
            setAction("ADD", data.message, true, data.data);
            toast.success(data.message);
            return true;
        } catch (err) {
            const msg = err.response?.data?.message ?? "Failed to add slot";
            setAction("ADD", msg, false);
            toast.error(msg);
            return false;
        }
    };

    const parkVehicle = async (formData) => {
        try {
            const { data } = await slotService.parkVehicle(formData);
            setSlots((prev) => prev.map((s) => s._id === data.data._id ? data.data : s));
            setAction("PARK", data.message, true, data.data);
            toast.success(data.message);
        } catch (err) {
            const msg = err.response?.data?.message ?? "No slot available";
            setAction("PARK", msg, false);
            toast.error(msg);
        }
    };

    const removeVehicle = async (id) => {
        try {
            const { data } = await slotService.removeVehicle(id);
            setSlots((prev) => prev.map((s) => s._id === data.data._id ? data.data : s));
            setAction("REMOVE", data.message, true, data.data);
            toast.success(data.message);
        } catch (err) {
            const msg = err.response?.data?.message ?? "Failed to remove vehicle";
            setAction("REMOVE", msg, false);
            toast.error(msg);
        }
    };

    const deleteSlot = async (id) => {
        try {
            const { data } = await slotService.deleteSlot(id);
            setSlots((prev) => prev.filter((s) => s._id !== id));
            setAction("DELETE", data.message, true);
            toast.success(data.message);
        } catch (err) {
            const msg = err.response?.data?.message ?? "Failed to delete slot";
            setAction("DELETE", msg, false);
            toast.error(msg);
        }
    };

    return {
        slots,
        loading,
        lastAction,
        stats: computeStats(slots),
        fetchSlots,
        addSlot,
        parkVehicle,
        removeVehicle,
        deleteSlot,
    };
};

export default useSlots;
