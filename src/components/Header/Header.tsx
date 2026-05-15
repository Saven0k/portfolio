import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "skills", "experience", "achievements", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <button
            onClick={() => scrollToSection("about")}
            className={activeSection === "about" ? "active" : ""}
          >
            {t("nav.about")}
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={activeSection === "skills" ? "active" : ""}
          >
            {t("nav.skills")}
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={activeSection === "experience" ? "active" : ""}
          >
            {t("nav.experience")}
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className={activeSection === "achievements" ? "active" : ""}
          >
            {t("nav.achievements")}
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={activeSection === "projects" ? "active" : ""}
          >
            {t("nav.projects")}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            {t("nav.contact")}
          </button>
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