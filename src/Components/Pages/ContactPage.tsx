import React, { useState, FormEvent } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");

  const serviceId = "service_msfi01v";
  const templateId = "template_kiyn6rh";
  const userId = "4K92dpSXhZ4_6Ko4h";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setResponseMessage("Email sent successfully!");
      },
      (error) => {
        console.log("FAILED...", error);
        setResponseMessage("Failed to send email.");
      }
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="form-container">
        <h2 className="title">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="name-container">
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="subject-container">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="message-container">
            <textarea
              id="message"
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button className="contact-submit" type="submit">
            Send
          </button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
      <div className="contact-socials">
        <a
          href="https://github.com/ndanner22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="contact-github"
            src="../../../images/icons/github-mark.png"
            alt="github logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/neil-danner-8a354a52/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../../images/icons/linkedin.png"
            alt="linkedin logo"
            className="contact-linkedin"
          />
        </a>
      </div>
    </>
  );
};

export default ContactForm;
