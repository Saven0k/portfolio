import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import "./Contact.scss";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";

  const contactItems = [
    {
      icon: "📧",
      title: t("contact.email"),
      value: profile.email,
      link: `mailto:${profile.email}`,
      color: "#ff6b6b"
    },
    {
      icon: "📱",
      title: t("contact.phone"),
      value: profile.phone,
      link: `tel:${profile.phone}`,
      color: "#4ecdc4"
    },
    {
      icon: "🐙",
      title: t("contact.github"),
      value: "github.com/Saven0k",
      link: profile.github,
      color: "#ffffff"
    },
    {
      icon: "✈️",
      title: t("contact.telegram"),
      value: "@owl11112",
      link: `https://t.me/${profile.telegram.replace("@", "")}`,
      color: "#26A5E4"
    },
    {
      icon: "📘",
      title: t("contact.vkontakte"),
      value: "@savenok0",
      link: profile.vkontakte,
      color: "#4C75A3"
    }
  ];

  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact__title"
      >
        {t("contact.title")}
      </motion.h2>

      <motion.p
        className="contact__available"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {t("contact.available")}
      </motion.p>

      <div className="contact__grid">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <div
              className="contact__card-icon"
              style={{
                background: `${item.color}15`,
                boxShadow: `0 0 15px ${item.color}30`
              }}
            >
              <span>{item.icon}</span>
            </div>
            <h3 className="contact__card-title">{item.title}</h3>
            <p className="contact__card-value">{item.value}</p>
            <div className="contact__card-arrow">→</div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="contact__footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>© 2026 Роман Савенков | {lang === "ru" ? "Full Stack разработчик" : "Full Stack Developer"}</p>
      </motion.div>
    </section>
  );
};

export default Contact;