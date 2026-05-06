import i18n from "../../i18n";
import { useAppStore } from "../../store/useAppStore";
import "./LanguageToggle.scss";

const LanguageToggle = () => {
  const { lang, setLang } = useAppStore();

  const changeLang = (l: "ru" | "en") => {
    setLang(l);
    i18n.changeLanguage(l);
  };

  return (
    <div className="lang">
      <button
        className={`lang__btn ${lang === "ru" ? "active" : ""}`}
        onClick={() => changeLang("ru")}
      >
        RU
      </button>
      <button
        className={`lang__btn ${lang === "en" ? "active" : ""}`}
        onClick={() => changeLang("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;