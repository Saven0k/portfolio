import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./Skills.scss";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("skills.title")}
      </motion.h2>

      <div className="skills__grid">
        {profile.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="skills__card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <div className="skills__circle">
              <svg viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#7c5cff"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: 283, strokeDashoffset: 283 }}
                  whileInView={{ 
                    strokeDashoffset: 283 - (283 * skill.level) / 100 
                  }}
                  transition={{ delay: i * 0.05 + 0.5, duration: 1.5 }}
                  transform="rotate(-90 50 50)"
                  style={{
                    strokeDasharray: 283
                  }}
                />
              </svg>
              <div className="skills__percentage">
                <span>{skill.level}%</span>
              </div>
            </div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;