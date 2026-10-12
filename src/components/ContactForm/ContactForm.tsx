import { motion } from "framer-motion";
import { useRef, useEffect, useEffectEvent } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "@formspree/react";
import "./ContactForm.scss";

const ContactForm = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en";
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit, reset] = useForm('xzdondew');

  const dismissResult = useEffectEvent(() => {
    if (!state.submitting) reset();
  });

  useEffect(() => {
    if (state.submitting) return;
    if (state.succeeded) formRef.current?.reset();
    if (!state.succeeded && !state.errors) return;

    const timer = window.setTimeout(() => dismissResult(), 3000);
    return () => window.clearTimeout(timer);
  }, [state.submitting, state.succeeded, state.errors]);

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
          {lang === "ru" ? "📨 Связаться со мной" : "📨 Contact me"}
        </motion.h2>
        
        <motion.p
          className="contact-form__subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {lang === "ru" 
            ? "Заполните форму, и я свяжусь с вами в ближайшее время" 
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
              disabled={state.submitting}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={lang === "ru" ? "Ваш Email" : "Your Email"}
              required
              disabled={state.submitting}
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows={5}
              placeholder={lang === "ru" ? "Ваше сообщение..." : "Your message..."}
              required
              disabled={state.submitting}
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={state.submitting}
          >
            {state.submitting ? (
              <span className="loader"></span>
            ) : (
              lang === "ru" ? "📤 Отправить" : "📤 Send"
            )}
          </button>

          {!state.submitting && state.succeeded && (
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

          {!state.submitting && state.errors !== null && (
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
