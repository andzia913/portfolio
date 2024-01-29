import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.scss";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [organization, setOrganization] = useState("");

  useEffect(() => emailjs.init("IU2Xd6AGrVn_7cJIR"), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send("service_a2k0mei", "template_ej0rav4", {
        name: name,
        email: email,
        text: text,
        organization: organization,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="contact" onSubmit={handleSubmit}>
      <h2 className="contact__title">Contact me</h2>
      <p className="contact__description">
        If you want to get in touch with me, please fill out the form below.
      </p>
      <div className="contact__field">
        <label htmlFor="name" className="contact__label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="contact__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="contact__field">
        <label htmlFor="email" className="contact__label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="contact__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="contact__field">
        <label htmlFor="organization" className="contact__label">
          Organization:
        </label>
        <input
          type="text"
          id="organization"
          className="contact__input"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
      </div>
      <div className="contact__field">
        <label htmlFor="text" className="contact__label">
          Text:
        </label>
        <textarea
          id="text"
          className="contact__textarea"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="contact__button">
        Submit
      </button>
    </form>
  );
};

export default Contact;
