import IconButton from '@mui/material/IconButton';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
// Toggle.tsx
type ToggleProps = {
  isOn: boolean;
  handleToggle: () => void;
};

export const Toggle: React.FC<ToggleProps> = ({ isOn, handleToggle }) => (
  <IconButton
    onClick={handleToggle}
    aria-label="Toggle Dark Mode"
    style={{
      background: isOn ? "#1f2937" : "#ffffff",
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
      {isOn ? <DarkMode /> : <LightMode />}
  </IconButton>
);