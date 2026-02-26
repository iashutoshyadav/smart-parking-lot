import { useState, useEffect } from "react";

const CountUp = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (target === 0) { setCount(0); return; }
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 25));
        const id = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(current);
            if (current >= target) clearInterval(id);
        }, 30);
        return () => clearInterval(id);
    }, [target]);

    return <span className="font-mono font-bold">{count}</span>;
};

const Navbar = ({ stats }) => (
    <header className="bg-surface-card border-b border-line sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

            <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700
          flex items-center justify-center text-white text-base font-bold shadow-glow-brand">
                    P
                </div>
                <span className="text-lg font-display font-bold text-content tracking-tight">
                    Smart<span className="text-brand-400">Park</span>
                </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-muted border border-line text-content-muted">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                    <CountUp target={stats.total} /> <span className="text-content-subtle ml-0.5">Total</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
                    <CountUp target={stats.free} /> <span className="opacity-70 ml-0.5">Free</span>
                </span>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-danger/10 border border-danger/20 text-danger">
                    <span className="w-2 h-2 rounded-full bg-danger" />
                    <CountUp target={stats.occupied} /> <span className="opacity-70 ml-0.5">Occupied</span>
                </span>

                <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warning/10 border border-warning/20 text-warning">
                    <span className="w-2 h-2 rounded-full bg-warning" />
                    <CountUp target={stats.ev} /> <span className="opacity-70 ml-0.5">EV</span>
                </span>
            </div>
        </div>
    </header>
);

export default Navbar;
