import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./About.scss";
import { EmailIcon, TelegramIcon, VKIcon } from "./icons";

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";

  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("about.title")}
      </motion.h2>

      <div className="about__grid">
        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="about__badge">
            <span className="badge-text">Full Stack Developer</span>
          </div>
          <p className="about__intro">{profile.about[lang].intro}</p>
          <ul className="about__list">
            {profile.about[lang].points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="about__info-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="info-grid">
            <div className="info-tile">
              <span className="info-number">{profile.age}</span>
              <span className="info-label">{lang === "ru" ? "лет" : "years"}</span>
            </div>
            <div className="info-tile">
              <span className="info-number">{profile.city[lang]}</span>
              <span className="info-label">{lang === "ru" ? "город" : "city"}</span>
            </div>
            <div className="info-tile">
              <span className="info-number">{profile.country[lang]}</span>
              <span className="info-label">{lang === "ru" ? "страна" : "country"}</span>
            </div>
            <div className="info-tile">
              <span className="info-number">{profile.experienceYears}+</span>
              <span className="info-label">{lang === "ru" ? "года опыта" : "experience"}</span>
            </div>
            <div className="info-tile">
              <span className="info-number">{lang === "ru" ? "Русский" : "Russian"}</span>
              <span className="info-label">{lang === "ru" ? "Родной" : "Native"}</span>
            </div>
            <div className="info-tile">
              <span className="info-number">{lang === "ru" ? "Английский" : "English"}</span>
              <span className="info-label">B2</span>
            </div>
          </div>
          <div className="education-compact">
            <div className="education-compact__header">
              <span className="education-compact__icon">🎓</span>
              <h3 className="education-compact__title">
                {lang === "ru" ? "Образование" : "Education"}
              </h3>
            </div>
            <div className="education-compact__list">
              {profile.education.map((edu, idx) => (
                <a
                  key={idx}
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="education-compact__item"
                >
                  <div className="education-compact__item-icon">
                    {idx === 0 ? "🏫" : "🎓"}
                  </div>
                  <div className="education-compact__item-content">
                    <div className="education-compact__item-name">
                      {lang === "ru" ? edu.name : edu.nameEn}
                      <span className="external-link">↗</span>
                    </div>
                    <div className="education-compact__item-meta">
                      <span className="education-compact__item-period">{edu.period[lang]}</span>
                      <span className="education-compact__item-status">{edu.status[lang]}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contacts-wrapper">
            <h3 className="contacts-title">
              {lang === "ru" ? "Способы связи" : "Contact methods"}
            </h3>
            <div className="contacts-circles">
              {profile.contacts.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-circle"
                  title={item.name}
                >
                  <span className="contact-icon">
                    {item.name === "Email" && <EmailIcon />}
                    {item.name === "Telegram" && <TelegramIcon />}
                    {item.name === "VKontakte" && <VKIcon />}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;