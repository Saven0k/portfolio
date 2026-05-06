import { useAppStore } from "../../store/useAppStore";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppStore();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;