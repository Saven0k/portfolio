import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./Skills.scss";

type Skill = (typeof profile.skills.frontend)[number];

const Skills = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";
  const [isMobile, setIsMobile] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<(Skill & { category: string }) | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!selectedSkill) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (dialog && !dialog.open) dialog.showModal();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedSkill]);

  return (
    <>
      <section id="skills" className="skills">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {t("skills.title")}
        </motion.h2>

        <div className={isMobile ? "skills__mobile" : "skills__wrapper"}>
          {[
            { category: "Frontend", skills: profile.skills.frontend },
            { category: "Backend", skills: profile.skills.backend }
          ].map(({ category, skills }) => (
            <div
              key={category}
              className={isMobile ? "skills__mobile-category" : "skills__category"}
            >
              <h3 className="skills__category-title">{category}</h3>
              <div className="skills__grid">
                {skills.map((skill, idx) => (
                  <motion.button
                    key={skill.name}
                    type="button"
                    className="skills__card"
                    aria-haspopup="dialog"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: idx * 0.02, duration: 0.3 }}
                    whileHover={isMobile ? undefined : { scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSkill({ ...skill, category })}
                  >
                    <div className="skills__card-header">
                      <span className="skills__name">{skill.name}</span>
                    </div>
                    <div className="skills__bar" role="img" aria-label={`${skill.name}: ${skill.level}%`}>
                      <div
                        className="skills__bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: category === "Frontend"
                            ? "linear-gradient(90deg, #7c5cff, #a08cff)"
                            : "linear-gradient(90deg, #00c6ff, #33d4ff)"
                        }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="skills__modal-overlay"
        aria-labelledby="skill-modal-title"
        aria-describedby="skill-modal-description"
        onClose={() => setSelectedSkill(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {selectedSkill && (
          <motion.div
            className="skills__modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button
              type="button"
              className="skills__modal-close"
              onClick={() => dialogRef.current?.close()}
              aria-label={t("skills.close")}
              autoFocus
            >
              ✕
            </button>
            <div className="skills__modal-content">
              <div className="skills__info-badge">
                <span>{selectedSkill.category}</span>
              </div>
              <h3 id="skill-modal-title" className="skills__info-title">{selectedSkill.name}</h3>
              <p id="skill-modal-description" className="skills__info-description">{selectedSkill.description[lang]}</p>
            </div>
          </motion.div>
        )}
      </dialog>
    </>
  );
};

export default Skills;
