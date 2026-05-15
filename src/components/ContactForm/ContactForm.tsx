import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./ContactForm.scss";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";

  return (
    <motion.section
      id="contact-form"
      className="contact-form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-form__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {lang === "ru" ? "📨 Написать мне" : "📨 Write me"}
        </motion.h2>
        
        <motion.p
          className="contact-form__subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {lang === "ru" 
            ? "Заполните форму и я свяжусь с вами в ближайшее время" 
            : "Fill out the form and I'll get back to you soon"}
        </motion.p>

        <motion.form
          className="contact-form__form"
          action="https://formsubmit.co/romasav2017@gmail.com"
          method="POST"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="Новое сообщение из портфолио!" />
          
          <input type="hidden" name="_next" value={window.location.href} />

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={lang === "ru" ? "Ваше имя" : "Your name"}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={lang === "ru" ? "Ваш Email" : "Your Email"}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows={5}
              placeholder={lang === "ru" ? "Ваше сообщение..." : "Your message..."}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            {lang === "ru" ? "📤 Отправить" : "📤 Send"}
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;