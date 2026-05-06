import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <div className="header__logo" onClick={() => scrollToSection("hero")}>
          <span className="logo-text">RS</span>
          <span className="logo-dot">.</span>
        </div>

        <button 
          className={`header__burger ${mobileMenuOpen ? "header__burger--active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${mobileMenuOpen ? "header__nav--open" : ""}`}>
          <button onClick={() => scrollToSection("about")}>{t("nav.about")}</button>
          <button onClick={() => scrollToSection("skills")}>{t("nav.skills")}</button>
          <button onClick={() => scrollToSection("experience")}>{t("nav.experience")}</button>
          <button onClick={() => scrollToSection("projects")}>{t("nav.projects")}</button>
          <button onClick={() => scrollToSection("contact")}>{t("nav.contact")}</button>
        </nav>

        <div className="header__controls">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;