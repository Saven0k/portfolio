import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./Hero.scss";
import image from "./mee.jpg"

const Hero = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language as "ru" | "en";

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="hero" className="hero">
            <img 
                src={image}
                alt={profile.name[lang]}
                className="hero__photo hero__photo--desktop"
            />

            <div className="hero__mobile-bg">
                <img 
                    src={image}
                    alt={profile.name[lang]}
                    className="hero__photo-bg"
                />
                <div className="hero__mobile-overlay"></div>
            </div>

            <div className="hero__content">
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
                    {profile.name[lang]} <br className="hero__br" />{profile.surname[lang]}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="hero__role"
                >
                    {profile.position[lang]}
                </motion.h2>

                <motion.div
                    className="hero__buttons"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <button 
                        onClick={() => scrollToSection("projects")} 
                        className="hero__btn-primary"
                        type="button"
                    >
                        {t("hero.view_work")}
                    </button>
                    <button 
                        onClick={() => scrollToSection("contact-form")} 
                        className="hero__btn-secondary"
                        type="button"
                    >
                        {t("hero.contact_me")}
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;