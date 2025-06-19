// Toggle.tsx
type ToggleProps = {
  isOn: boolean;
  handleToggle: () => void;
};

export const Toggle: React.FC<ToggleProps> = ({ isOn, handleToggle }) => (
  <button
    onClick={handleToggle}
    aria-label="Toggle Dark Mode"
    style={{
      background: isOn ? "#1f2937" : "#ffffff", // dark gray vs. light yellow
      borderRadius: "9999px",
      width: "60px",
      height: "30px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: isOn ? "flex-end" : "flex-start",
      padding: "0 5px",
      fontSize: "1.2rem",
      transition: "all 0.3s ease-in-out",
    }}
  >
    <span
      role="img"
      aria-label={isOn ? "Moon" : "Sun"}
      style={{
        transition: "transform 0.3s",
      }}
    >
      {isOn ? "🌙" : "☀️"}
    </span>
  </button>
);
