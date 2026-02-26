import axios from "axios";
import config from "../config.js";

const api = axios.create({
    baseURL: config.API_BASE_URL,
    headers: { "Content-Type": "application/json" },
});

const slotService = {
    getAll: () => api.get("/slots"),
    addSlot: (data) => api.post("/slots", data),
    parkVehicle: (data) => api.post("/slots/park", data),
    removeVehicle: (id) => api.patch(`/slots/${id}/remove`),
    deleteSlot: (id) => api.delete(`/slots/${id}`),
};

export default slotService;
