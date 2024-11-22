import React, { useState } from "react";
import ButtonPrincipal from "./ButtonPrincipal";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      username,
      email,
      subject,
      message,
    };
  
    try {
      const response = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        setSuccess(true);
      } else {
        console.error("Error al enviar el correo:", await response.text());
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
    }
  };

  return (
    <div className="bg-[#F9FBFA] p-4 max-w-md w-full mx-4">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4 px-4">
          <label className="block text-[#111418] text-base font-medium mb-2">
            {t('home.contactForm.nameLabel')}
          </label>
          <input
            type="text"
            placeholder={t('home.contactForm.namePlaceholder')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input w-full h-12 px-3 border border-[#15B659] rounded-lg placeholder:text-[#99BBA8] text-[#0C1811] focus:outline-none"
          />
        </div>

        <div className="mb-4 px-4">
          <label className="block text-[#111418] text-base font-medium mb-2">
            {t('home.contactForm.emailPlaceholder')}
          </label>
          <input
            type="email"
            placeholder={t('home.contactForm.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input w-full h-12 px-3 border border-[#15B659] rounded-lg placeholder:text-[#99BBA8] text-[#0C1811] focus:outline-none"
          />
        </div>

        <div className="mb-4 px-4">
          <label className="block text-[#111418] text-base font-medium mb-2">
            {t('home.contactForm.subjectPlaceholder')}
          </label>
          <input
            type="text"
            placeholder={t('home.contactForm.subjectPlaceholder')}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="form-input w-full h-12 px-3 border border-[#15B659] rounded-lg placeholder:text-[#99BBA8] text-[#0C1811] focus:outline-none"
          />
        </div>

        <div className="mb-4 px-4">
          <label className="block text-[#111418] text-base font-medium mb-2">
            {t('home.contactForm.messagePlaceholder')}
          </label>
          <textarea
            placeholder={t('home.contactForm.messagePlaceholder')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input w-full h-24 px-3 border border-[#15B659] rounded-lg placeholder:text-[#99BBA8] text-[#0C1811] focus:outline-none"
          />
        </div>

        <div className="flex justify-center px-4">
          <ButtonPrincipal text={t('home.contactForm.sendButton')} />
        </div>

        {success && (
          <p className="text-green-600 text-center mt-4">
            ¡Correo enviado correctamente!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;