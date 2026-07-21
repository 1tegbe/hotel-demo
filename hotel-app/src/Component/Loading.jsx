const ACCENT = "var(--loader-accent, #C6F135)";
const BG = "var(--loader-bg, #0B0D10)";

export default function BrandLoader({ show = true, label = "Élara Hotel and suites" }) {
  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.75rem",
        background: BG,
      }}
    >
      <style>{`
        @keyframes loader-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes loader-bounce {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-4px); }
        }
      `}</style>

      <div
        style={{
          width: 72,
          height: 72,
          border: "3px solid rgba(255,255,255,0.2)",
          borderTopColor: ACCENT,
          borderRadius: "50%",
          animation: "loader-spin 1s linear infinite",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
        <span
          style={{
            fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            fontSize: "0.95rem",
            letterSpacing: "0.35em",
            color: "#E5E7EB",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>

        <div style={{ display: "flex", gap: "0.4rem" }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: ACCENT,
                display: "inline-block",
                animation: `loader-bounce 1.1s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
