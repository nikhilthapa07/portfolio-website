export default function PixelCursor({
  label,
  className = "",
  color = "#3FA2FF",
}: {
  label: string;
  className?: string;
  color?: string;
}) {
  return (
    <span className={`cursor ${className}`} aria-hidden="true">
      <span className="cur-in">
        <svg viewBox="0 0 22 24">
          <path
            d="M2 1.5v19l5.2-4.6 3.6 7.6 3.3-1.5-3.6-7.5h7z"
            fill={color}
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <span className="lbl">{label}</span>
      </span>
    </span>
  );
}
