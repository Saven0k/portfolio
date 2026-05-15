// src/components/ContactForm/ContactForm.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import "./ContactForm.scss";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language as "ru" | "en";
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const FORMSPREE_KEY = "xzdondew"; 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_KEY}`, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                const data = await response.json();
                console.error("Formspree error:", data);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            console.error("Network error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

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
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <input type="hidden" name="_subject" value="Новое сообщение из портфолио!" />
                    <input type="hidden" name="_replyto" value="email" />

                    <input type="hidden" name="_captcha" value="false" />

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
                                ? "❌ Ошибка при отправке. Попробуйте позже."
                                : "❌ Error sending. Try again later."}
                        </motion.p>
                    )}
                </motion.form>
            </div>
        </motion.section>
    );
};

export default ContactForm;