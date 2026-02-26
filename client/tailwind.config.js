export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                surface: {
                    DEFAULT: "#0f1117",
                    card: "#1a1d27",
                    muted: "#1e2132",
                    elevated: "#242840",
                },
                content: {
                    DEFAULT: "#e2e8f0",
                    muted: "#94a3b8",
                    subtle: "#64748b",
                },
                line: {
                    DEFAULT: "#2d3148",
                    subtle: "#1f2238",
                },
                brand: {
                    400: "#818cf8",
                    500: "#6366f1",
                    600: "#4f46e5",
                    700: "#4338ca",
                },
                success: { DEFAULT: "#22c55e", light: "rgba(34,197,94,0.12)", dark: "#15803d" },
                danger: { DEFAULT: "#ef4444", light: "rgba(239,68,68,0.12)", dark: "#991b1b" },
                warning: { DEFAULT: "#f59e0b", light: "rgba(245,158,11,0.12)", dark: "#92400e" },
                info: { DEFAULT: "#3b82f6", light: "rgba(59,130,246,0.12)", dark: "#1e40af" },
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
                display: ["Space Grotesk", "sans-serif"],
                mono: ["Space Mono", "monospace"],
            },
            boxShadow: {
                card: "0 1px 3px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.4)",
                "card-md": "0 4px 12px rgba(0,0,0,0.5)",
                "glow-green": "0 0 0 1px rgba(34,197,94,0.25),  0 4px 20px rgba(34,197,94,0.12)",
                "glow-red": "0 0 0 1px rgba(239,68,68,0.25),  0 4px 20px rgba(239,68,68,0.12)",
                "glow-green-lg": "0 8px 30px rgba(34,197,94,0.22), 0 0 0 1px rgba(34,197,94,0.2)",
                "glow-red-lg": "0 8px 30px rgba(239,68,68,0.22), 0 0 0 1px rgba(239,68,68,0.2)",
                "glow-brand": "0 4px 20px rgba(99,102,241,0.3)",
                "glow-brand-btn": "0 4px 15px rgba(99,102,241,0.35)",
                "glow-green-btn": "0 4px 15px rgba(34,197,94,0.35)",
            },
            animation: {
                "fade-in": "fadeIn .2s ease-out",
                "slide-up": "slideUp .3s ease-out",
                "spin-slow": "spin 1.5s linear infinite",
                "pulse-dot": "pulseDot 2s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
                slideUp: { "0%": { opacity: "0", transform: "translateY(10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
                pulseDot: { "0%,100%": { opacity: "1", transform: "scale(1)" }, "50%": { opacity: "0.4", transform: "scale(0.8)" } },
            },
        },
    },
    plugins: [],
};
