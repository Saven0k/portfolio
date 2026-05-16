import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import LinkIcon from "./LinkIcon";
import "./Experience.scss";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedItem, setSelectedItem] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const timeline = profile.unifiedTimeline[lang];

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
          <h3>{item.title}</h3>
          <div className="details-link-icon" onClick={(e) => {
            e.stopPropagation();
            if (item.link) window.open(item.link, "_blank");
          }}>
            <LinkIcon />
          </div>
        </div>
        <h4>{item.subtitle}</h4>
        <span className="details-date">{item.date}</span>
      </div>

      <div className="details-description">
        <p>{item.description}</p>
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
    <section id="experience" className="experience" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t("experience.title")}
      </motion.h2>

      <div className="experience__container">
        <div className="experience__timeline">
          <div className="timeline-line"></div>
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className={`timeline-item ${selectedItem === idx && !isMobile ? "active" : ""}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
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
            </motion.div>
          ))}
        </div>

        {/* Десктопная версия - правая панель */}
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

      {/* Мобильная версия - модальное окно */}
      {isMobile && modalOpen && (
        <div className="experience__modal-overlay" onClick={closeModal}>
          <motion.div
            className="experience__modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="experience__modal-close" onClick={closeModal}>
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