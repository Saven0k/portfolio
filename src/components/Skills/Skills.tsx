import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./Skills.scss";

const Skills = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";
  const [selectedSkillLeft, setSelectedSkillLeft] = useState<{ name: string; description: string; category: string } | null>(null);
  const [selectedSkillRight, setSelectedSkillRight] = useState<{ name: string; description: string; category: string } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileModalSkill, setMobileModalSkill] = useState<{ name: string; description: string; category: string } | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedSkillLeft(null);
        setSelectedSkillRight(null);
        setMobileModalSkill(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isMobile && mobileModalSkill) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, mobileModalSkill]);

  const handleLeftSkillClick = (skill: { name: string; description: { ru: string; en: string }; level: number }, category: string) => {
    if (isMobile) {
      setMobileModalSkill({
        name: skill.name,
        description: skill.description[lang],
        category: category
      });
    } else {
      setSelectedSkillLeft({
        name: skill.name,
        description: skill.description[lang],
        category: category
      });
    }
  };

  const handleRightSkillClick = (skill: { name: string; description: { ru: string; en: string }; level: number }, category: string) => {
    if (isMobile) {
      setMobileModalSkill({
        name: skill.name,
        description: skill.description[lang],
        category: category
      });
    } else {
      setSelectedSkillRight({
        name: skill.name,
        description: skill.description[lang],
        category: category
      });
    }
  };

  const handleCloseMobileModal = () => {
    setMobileModalSkill(null);
  };

  const handleCloseLeft = () => {
    setSelectedSkillLeft(null);
  };

  const handleCloseRight = () => {
    setSelectedSkillRight(null);
  };

  if (isMobile) {
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

          <div className="skills__mobile">
            <div className="skills__mobile-category">
              <h3 className="skills__category-title">Frontend</h3>
              <div className="skills__grid">
                {profile.skills.frontend.map((skill, idx) => (
                  <motion.button
                    key={skill.name}
                    className="skills__card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: idx * 0.02, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLeftSkillClick(skill, "Frontend")}
                  >
                    <div className="skills__card-header">
                      <span className="skills__name">{skill.name}</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: "linear-gradient(90deg, #7c5cff, #a08cff)"
                        }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="skills__mobile-category">
              <h3 className="skills__category-title">Backend</h3>
              <div className="skills__grid">
                {profile.skills.backend.map((skill, idx) => (
                  <motion.button
                    key={skill.name}
                    className="skills__card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: idx * 0.02, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRightSkillClick(skill, "Backend")}
                  >
                    <div className="skills__card-header">
                      <span className="skills__name">{skill.name}</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: "linear-gradient(90deg, #00c6ff, #33d4ff)"
                        }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {mobileModalSkill && (
          <div className="skills__modal-overlay" onClick={handleCloseMobileModal}>
            <motion.div
              className="skills__modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="skills__modal-close" onClick={handleCloseMobileModal}>
                ✕
              </button>
              <div className="skills__modal-content">
                <div className="skills__info-badge">
                  <span>{mobileModalSkill.category}</span>
                </div>
                <h3 className="skills__info-title">{mobileModalSkill.name}</h3>
                <p className="skills__info-description">{mobileModalSkill.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </>
    );
  }

  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        {t("skills.title")}
      </motion.h2>

      <div className="skills__wrapper">
        <div className="skills__left">
          {selectedSkillRight ? (
            <motion.div
              className="skills__info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <button className="skills__info-close" onClick={handleCloseRight}>
                ✕
              </button>
              <div className="skills__info-content">
                <div className="skills__info-badge">
                  <span>{selectedSkillRight.category}</span>
                </div>
                <h3 className="skills__info-title">{selectedSkillRight.name}</h3>
                <p className="skills__info-description">{selectedSkillRight.description}</p>
              </div>
            </motion.div>
          ) : (
            <div className="skills__category">
              <h3 className="skills__category-title">Frontend</h3>
              <div className="skills__grid">
                {profile.skills.frontend.map((skill, idx) => (
                  <motion.button
                    key={skill.name}
                    className="skills__card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: idx * 0.02, duration: 0.3 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLeftSkillClick(skill, "Frontend")}
                  >
                    <div className="skills__card-header">
                      <span className="skills__name">{skill.name}</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: "linear-gradient(90deg, #7c5cff, #a08cff)"
                        }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="skills__right">
          {selectedSkillLeft ? (
            <motion.div
              className="skills__info"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <button className="skills__info-close" onClick={handleCloseLeft}>
                ✕
              </button>
              <div className="skills__info-content">
                <div className="skills__info-badge">
                  <span>{selectedSkillLeft.category}</span>
                </div>
                <h3 className="skills__info-title">{selectedSkillLeft.name}</h3>
                <p className="skills__info-description">{selectedSkillLeft.description}</p>
              </div>
            </motion.div>
          ) : (
            <div className="skills__category">
              <h3 className="skills__category-title">Backend</h3>
              <div className="skills__grid">
                {profile.skills.backend.map((skill, idx) => (
                  <motion.button
                    key={skill.name}
                    className="skills__card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: idx * 0.02, duration: 0.3 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRightSkillClick(skill, "Backend")}
                  >
                    <div className="skills__card-header">
                      <span className="skills__name">{skill.name}</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: "linear-gradient(90deg, #00c6ff, #33d4ff)"
                        }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;