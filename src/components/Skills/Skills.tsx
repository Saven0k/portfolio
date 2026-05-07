import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./Skills.scss";

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const skillCategories = [
    {
      title: { ru: "🎨 Frontend", en: "🎨 Frontend" },
      items: profile.skills.frontend,
      color: "#7c5cff"
    },
    {
      title: { ru: "⚙️ Backend", en: "⚙️ Backend" },
      items: profile.skills.backend,
      color: "#00c6ff"
    }
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        {t("skills.title")}
      </motion.h2>

      <div className="skills__container">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            className="skills__category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: catIdx * 0.2, duration: 0.5 }}
          >
            <h3 className="skills__category-title">
              <span className="category-icon">{category.title.ru.split(" ")[0]}</span>
              {category.title.ru.split(" ").slice(1).join(" ")}
            </h3>

            <div className="skills__grid">
              {category.items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skills__card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.02, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
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
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={category.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="skill-circle-progress"
                        style={{
                          strokeDasharray: 283,
                          strokeDashoffset: hasAnimated ? 283 - (283 * skill.level) / 100 : 283
                        }}
                      />
                    </svg>
                    <div className="skills__percentage" style={{ color: category.color }}>
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                  <h3>{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;