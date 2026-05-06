import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./About.scss";

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
      
      <motion.div
        className="about__content"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about__text">
          <p>{profile.about[lang]}</p>
        </div>
        
        <div className="about__stats">
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">{profile.age}</span>
            <span className="stat-label">{lang === "ru" ? "лет" : "years old"}</span>
          </motion.div>
          
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">{profile.city[lang]}</span>
            <span className="stat-label">{lang === "ru" ? "город" : "city"}</span>
          </motion.div>
          
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">{profile.country[lang]}</span>
            <span className="stat-label">{lang === "ru" ? "страна" : "country"}</span>
          </motion.div>
          
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">20+</span>
            <span className="stat-label">{lang === "ru" ? "проектов" : "projects"}</span>
          </motion.div>
          
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">1+</span>
            <span className="stat-label">{lang === "ru" ? "год опыта" : "year exp"}</span>
          </motion.div>
        </div>

        <div className="about__info">
          <div className="info-item">
            <span className="info-icon">📧</span>
            <div>
              <h4>Email</h4>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h4>{lang === "ru" ? "Локация" : "Location"}</h4>
              <p>{profile.location[lang]}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;