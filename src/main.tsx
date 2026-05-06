import { createRoot } from 'react-dom/client'
import "./styles/global.scss";
import App from './App.tsx'

const initializeApp = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
}

initializeApp();

createRoot(document.getElementById('root')!).render(<App />);