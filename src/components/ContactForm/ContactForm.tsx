import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "@formspree/react";
import "./ContactForm.scss";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  const [state, handleSubmit] = useForm('xzdondew');

  useEffect(() => {
    if (state.succeeded) {
      setStatus("success");
      formRef.current?.reset(); 
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors && Object.keys(state.errors).length > 0) {
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.submitting) {
      setStatus("loading");
    }
  }, [state.submitting]);

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
          ref={formRef}
          className="contact-form__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <input type="hidden" name="_subject" value="Новое сообщение из портфолио!" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={lang === "ru" ? "Ваше имя" : "Your name"}
              required
              disabled={status === "loading"}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={lang === "ru" ? "Ваш Email" : "Your Email"}
              required
              disabled={status === "loading"}
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows={5}
              placeholder={lang === "ru" ? "Ваше сообщение..." : "Your message..."}
              required
              disabled={status === "loading"}
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className="loader"></span>
            ) : (
              lang === "ru" ? "📤 Отправить" : "📤 Send"
            )}
          </button>

          {status === "success" && (
            <motion.p
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {lang === "ru" 
                ? "✅ Сообщение отправлено! Я свяжусь с вами." 
                : "✅ Message sent! I'll get back to you."}
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              className="error-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {lang === "ru" 
                ? "❌ Ошибка при отправке. Проверьте правильность Email." 
                : "❌ Error sending. Check your email address."}
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;