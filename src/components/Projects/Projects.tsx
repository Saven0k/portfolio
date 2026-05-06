import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./Projects.scss";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";

  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("projects.title")}
      </motion.h2>

      <div className="projects__grid">
        {profile.projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="project"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <div className="project__image">
              <div className="project__overlay">
                <div className="project__features">
                  {project.features?.map((feature, idx) => (
                    <span key={idx}>✨ {feature}</span>
                  ))}
                </div>
              </div>
            </div>

            <h3>{project.name}</h3>
            <p>{project.description[lang]}</p>

            <div className="project__stack">
              {project.stack.map((tech) => (
                <span key={tech} className="project__tech">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project__links">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project__link">
                <span>🔗</span> {t("projects.demo")}
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project__link">
                <span>🐙</span> {t("projects.github")}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;