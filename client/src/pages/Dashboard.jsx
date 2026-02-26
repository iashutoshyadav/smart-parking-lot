import useSlots from "../hooks/useSlots.js";
import Navbar from "../components/common/Navbar.jsx";
import AddSlotForm from "../components/slots/AddSlotForm.jsx";
import SlotGrid from "../components/slots/SlotGrid.jsx";
import ParkVehicleForm from "../components/vehicle/ParkVehicleForm.jsx";
import RemoveVehicleForm from "../components/vehicle/RemoveVehicleForm.jsx";
import OutputPanel from "../components/output/OutputPanel.jsx";

const Dashboard = () => {
    const {
        slots, loading, lastAction, stats,
        addSlot, parkVehicle, removeVehicle, deleteSlot,
    } = useSlots();

    return (
        <div className="min-h-screen bg-surface">
            <Navbar stats={stats} />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                <div className="mb-6">
                    <h1 className="text-xl font-display font-bold text-content">Parking Management</h1>
                    <p className="text-sm text-content-subtle mt-0.5">
                        Add slots, park vehicles, and monitor your lot in real time.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] gap-5">
                    <div className="space-y-5">
                        <AddSlotForm onAdd={addSlot} />
                        <ParkVehicleForm onPark={parkVehicle} />
                        <RemoveVehicleForm slots={slots} onRemove={removeVehicle} />
                    </div>

                    <SlotGrid
                        slots={slots}
                        loading={loading}
                        onDelete={deleteSlot}
                        onRemove={removeVehicle}
                    />

                    <OutputPanel lastAction={lastAction} stats={stats} />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
