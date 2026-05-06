import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Achievements.scss";
import { profile } from "../../data/profile";

const Achievements = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = profile.achievements[lang];

  return (
    <section id="achievements" className="achievements" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t("achievements.title")}
      </motion.h2>

      <div className="achievements__container">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            className="achievements__card"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="achievements__header">
              <div className="achievements__icon">
                <span>{achievement.icon}</span>
              </div>
              <div className="achievements__meta">
                <span className="achievements__date">{achievement.date}</span>
                <span className="achievements__place">{achievement.place}</span>
              </div>
            </div>

            <h3 className="achievements__title">{achievement.title}</h3>
            <p className="achievements__category">{achievement.category}</p>
            <p className="achievements__description">{achievement.description}</p>

            <div className="achievements__details">
              <h4>{lang === "ru" ? "Ключевые результаты:" : "Key results:"}</h4>
              <ul>
                {achievement.details.map((detail, dIdx) => (
                  <li key={dIdx}>
                    <span className="detail-icon">▹</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="achievements__badge">
              <span>🏅 {lang === "ru" ? "Призер" : "Prize-winner"}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;