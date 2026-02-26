const VARIANT_CLASSES = {
    green: "bg-success/10  text-success  border-success/20",
    red: "bg-danger/10   text-danger   border-danger/20",
    blue: "bg-info/10     text-info     border-info/20",
    yellow: "bg-warning/10  text-warning  border-warning/20",
    gray: "bg-surface-muted text-content-subtle border-line",
    brand: "bg-brand-500/10  text-brand-400  border-brand-500/20",
};

const Badge = ({ label, variant = "gray" }) => (
    <span
        className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full border
      ${VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.gray}`}
    >
        {label}
    </span>
);

export default Badge;
