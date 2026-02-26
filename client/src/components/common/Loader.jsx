const Loader = ({ text = "Loading..." }) => (
    <div className="flex flex-col items-center justify-center py-14 gap-3">
        <div className="w-9 h-9 rounded-full border-[3px] border-line border-t-brand-500 animate-spin-slow" />
        {text && <p className="text-sm text-content-subtle font-display">{text}</p>}
    </div>
);

export default Loader;
