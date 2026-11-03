import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import LinkIcon from "./LinkIcon";
import "./Experience.scss";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";
  const [selectedItem, setSelectedItem] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const timeline = profile.unifiedTimeline[lang];
  const totalProjects = timeline.filter(item => item.type === "project").length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isMobile && modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, modalOpen]);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "work": return lang === "ru" ? "Работа" : "Work";
      case "project": return lang === "ru" ? "Проект" : "Project";
      case "achievement": return lang === "ru" ? "Достижение" : "Achievement";
      default: return "";
    }
  };

  const handleDetailsClick = () => {
    if (timeline[selectedItem]?.link) {
      window.open(timeline[selectedItem].link, "_blank");
    }
  };

  const handleItemClick = (idx: number) => {
    setSelectedItem(idx);
    if (isMobile) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderDetails = (item: typeof timeline[0]) => (
    <>
      <div className="details-header">
        <div className="details-badge" data-type={item.type}>
          {getTypeLabel(item.type)}
        </div>
        <div className="details-title-row">
          <h3 id="experience-project-title">{item.title}</h3>
          <a
            className="details-link-icon"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={lang === "ru" ? "Открыть источник проекта или достижения" : "Open project or achievement source"}
            onClick={(e) => e.stopPropagation()}
          >
            <LinkIcon />
          </a>
        </div>
        <h4>{item.subtitle}</h4>
        <span className="details-date">{item.date}</span>
      </div>

      <div className="details-description">
        <p>{item.description}</p>
        {item.website && (
          <a
            className="details-website"
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {t("projects.website")} ↗
          </a>
        )}
      </div>

      <div className="details-list">
        <h4>{lang === "ru" ? "Ключевые моменты:" : "Key points:"}</h4>
        <ul>
          {item.details.map((detail: string, idx: number) => (
            <li key={idx}>
              <span className="list-icon">▹</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {item.technologies && (
        <div className="details-tech">
          <h4>{lang === "ru" ? "Технологии:" : "Technologies:"}</h4>
          <div className="tech-tags">
            {item.technologies.map((tech: string, idx: number) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      )}
    </>
  );

  return (
    <section id="experience" className="experience">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {t("experience.title")}
      </motion.h2>

      <div className="experience__container">
        <div className="experience__timeline">
          {/* Счётчик сверху */}
          <div className="timeline-counter">
            <span className="counter-number">{totalProjects}</span>
            <span className="counter-label">
              {lang === "ru" ? "проектов" : "projects"}
            </span>
          </div>
          
          <div className="timeline-line"></div>
          {timeline.map((item, idx) => (
            <motion.button
              key={idx}
              type="button"
              className={`timeline-item ${selectedItem === idx && !isMobile ? "active" : ""}`}
              aria-haspopup={isMobile ? "dialog" : undefined}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.35 }}
              onClick={() => handleItemClick(idx)}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-tag" data-type={item.type}>
                  {getTypeLabel(item.type)}
                </div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <span className="timeline-date">{item.date}</span>
              </div>
            </motion.button>
          ))}
        </div>
        {!isMobile && (
          <motion.div
            className="experience__details"
            key={selectedItem}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleDetailsClick}
          >
            {renderDetails(timeline[selectedItem])}
          </motion.div>
        )}
      </div>
      {isMobile && modalOpen && (
        <div className="experience__modal-overlay" onClick={closeModal}>
          <motion.div
            className="experience__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-project-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="experience__modal-close"
              aria-label={lang === "ru" ? "Закрыть описание проекта" : "Close project details"}
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="experience__modal-content">
              {renderDetails(timeline[selectedItem])}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Experience;
