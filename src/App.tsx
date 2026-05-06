import { useEffect } from "react";
import { useAppStore } from "./store/useAppStore";
import MainLayout from "./layouts/MainLayout";
import "./i18n";
import "./styles/global.scss";

function App() {
  const { theme } = useAppStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <MainLayout />;
}

export default App;