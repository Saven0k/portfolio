import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./SoftSkills.scss";

const SoftSkills = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const softSkills = profile.softSkills[lang];

  return (
    <section id="soft-skills" className="soft-skills" ref={ref}>
      <div className="soft-skills__background">
        <div className="gradient-orb"></div>
        <div className="gradient-orb-2"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        💫 {t("softSkills.title")}
      </motion.h2>

      <motion.p
        className="soft-skills__subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("softSkills.subtitle")}
      </motion.p>

      <div className="soft-skills__grid">
        {softSkills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="soft-skills__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <div className="soft-skills__card-inner">
              <div className="soft-skills__header">
                <span className="soft-skills__icon">{skill.icon}</span>
                <div className="soft-skills__level">
                  <svg viewBox="0 0 60 60" className="soft-skills__circle">
                    <circle
                      cx="30"
                      cy="30"
                      r="25"
                      fill="none"
                      stroke="rgba(124, 92, 255, 0.1)"
                      strokeWidth="4"
                    />
                    <motion.circle
                      cx="30"
                      cy="30"
                      r="25"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: 157, strokeDashoffset: 157 }}
                      animate={hasAnimated ? { strokeDashoffset: 157 - (157 * skill.level) / 100 } : {}}
                      transition={{ delay: idx * 0.05, duration: 1.5 }}
                      transform="rotate(-90 30 30)"
                      style={{ strokeDasharray: 157 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7c5cff" />
                        <stop offset="100%" stopColor="#00c6ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="soft-skills__percent">{skill.level}%</span>
                </div>
              </div>
              <h3 className="soft-skills__name">{skill.name}</h3>
              <p className="soft-skills__description">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="soft-skills__quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="quote-icon">“</div>
        <p>{lang === "ru" ? "Код пишет машина, а проблемы решает человек" : "Code is written by machine, but problems are solved by human"}</p>
        <div className="quote-author">— Roman Savenkov</div>
      </motion.div>
    </section>
  );
};

export default SoftSkills;