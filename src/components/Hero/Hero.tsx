// src/components/Hero/Hero.tsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./Hero.scss";

const Hero = () => {
    const { t } = useTranslation();

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="hero">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="hero__subtitle"
            >
                {t("hero.greeting")}
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hero__title"
            >
                {profile.name} {profile.surname}
                <span className="hero__title-accent">.</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="hero__role"
            >
                {t("hero.role")}
            </motion.h2>

            <motion.div
                className="hero__buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <button onClick={scrollToProjects} className="hero__btn-primary">
                    {t("hero.view_work")}
                </button>
                <button onClick={scrollToContact} className="hero__btn-secondary">
                    {t("hero.contact_me")}
                </button>
            </motion.div>
        </section>
    );
};

export default Hero;