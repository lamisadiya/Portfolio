export default function CornerFrame({
  className = "",
  color = "var(--primary)",
}: {
  className?: string;
  color?: string;
}) {
  const arm = 14;
  const style = { borderColor: color };
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <span
        className="absolute top-0 left-0 border-t border-l"
        style={{ ...style, width: arm, height: arm }}
      />
      <span
        className="absolute top-0 right-0 border-t border-r"
        style={{ ...style, width: arm, height: arm }}
      />
      <span
        className="absolute bottom-0 left-0 border-b border-l"
        style={{ ...style, width: arm, height: arm }}
      />
      <span
        className="absolute bottom-0 right-0 border-b border-r"
        style={{ ...style, width: arm, height: arm }}
      />
    </div>
  );
}
