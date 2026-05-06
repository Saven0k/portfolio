import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./Experience.scss";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t("experience.title")}
      </motion.h2>

      <div className="experience__timeline">
        {profile.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="experience__item"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="experience__dot"></div>
            <div className="experience__content">
              <h3>{lang === "ru" ? exp.company : exp.companyEn}</h3>
              <h4>{exp.position[lang]}</h4>
              <span className="experience__period">{exp.period[lang]}</span>
              
              {exp.projects.map((project, pIdx) => (
                <div key={pIdx} className="experience__project">
                  <h5>{lang === "ru" ? project.name : project.nameEn}</h5>
                  <p>{project.description[lang]}</p>
                  <ul>
                    {project.achievements[lang].map((achievement, aIdx) => (
                      <li key={aIdx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="experience__education-section"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="education__title">{t("experience.education")}</h3>
        <div className="education__grid">
          {profile.education.map((edu, idx) => (
            <div key={idx} className="education__card">
              <div className="education__card-icon">
                {idx === 0 ? "🏫" : "🎓"}
              </div>
              <div className="education__card-content">
                <a 
                  href={edu.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="education__name"
                >
                  {lang === "ru" ? edu.name : edu.nameEn}
                  <span className="external-link">↗</span>
                </a>
                <p className="education__degree">{edu.degree[lang]}</p>
                <p className="education__specialization">{edu.specialization[lang]}</p>
                <div className="education__meta">
                  <span className="education__period">{edu.period[lang]}</span>
                  <span className="education__status">{edu.status[lang]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="experience__languages-section"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h3>{t("experience.languages")}</h3>
        <div className="languages__grid">
          {profile.languages.map((langItem, idx) => (
            <div key={idx} className="language-item">
              <div className="language-info">
                <span className="language-name">{lang === "ru" ? langItem.name : langItem.nameEn}</span>
                <span className="language-level">{langItem.level[lang]}</span>
              </div>
              <div className="language-bar">
                <motion.div 
                  className="language-progress"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${langItem.percentage}%` } : {}}
                  transition={{ delay: 0.8 + idx * 0.2, duration: 1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;