import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => (
    <>
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 3500,
                style: {
                    borderRadius: "12px",
                    fontSize: "13px",
                    fontFamily: "Inter, sans-serif",
                    background: "#1a1d27",
                    color: "#e2e8f0",
                    border: "1px solid #2d3148",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                },
                success: { iconTheme: { primary: "#22c55e", secondary: "#1a1d27" } },
                error: { iconTheme: { primary: "#ef4444", secondary: "#1a1d27" } },
            }}
        />
        <Dashboard />
    </>
);

export default App;
