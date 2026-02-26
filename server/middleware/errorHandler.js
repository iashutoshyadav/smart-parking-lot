const errorHandler = (err, _req, res, _next) => {
    console.error("[ErrorHandler]", err.message);

    if (err.code === 11000) {
        const field = Object.keys(err.keyValue || {})[0] || "field";
        return res.status(409).json({
            success: false,
            message: `Duplicate value for field: ${field}`,
        });
    }

    if (err.name === "ValidationError") {
        const message = Object.values(err.errors)
            .map((e) => e.message)
            .join(", ");
        return res.status(400).json({ success: false, message });
    }

    if (err.name === "CastError") {
        return res.status(400).json({ success: false, message: "Invalid ID format." });
    }

    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};

export default errorHandler;
