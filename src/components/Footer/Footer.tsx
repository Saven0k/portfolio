import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./Footer.scss";

const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <p>© 2025 - 2026 {profile.name[lang]} {profile.surname[lang]}</p>
          <p className="footer__tagline">
            {lang === "ru"
              ? "Full Stack разработчик · Создаю современные веб-приложения"
              : "Full Stack Developer · Building modern web applications"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;