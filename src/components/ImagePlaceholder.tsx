interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
}

export function ImagePlaceholder({
  label,
  sublabel = "Replace with professional photo",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-brand-charcoal to-brand-gray p-6 text-center ${className}`}
      role="img"
      aria-label={`${label}. ${sublabel}`}
    >
      <svg
        className="mb-3 h-12 w-12 text-white/30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-sm font-semibold text-white/90">{label}</p>
      <p className="mt-1 text-xs text-white/50">{sublabel}</p>
    </div>
  );
}
