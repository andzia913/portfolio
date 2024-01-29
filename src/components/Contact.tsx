import React, { useState } from "react";
import "../styles/contact.scss";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [organization, setOrganization] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nodemailer = require("nodemailer");

    exports.handler = async (event, context) => {
      const { name, email, organization, text } = JSON.parse(event.body);

      // Create a transporter using your email provider's SMTP settings
      const transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false,
        auth: {
          user: "your-email@example.com",
          pass: "your-email-password",
        },
      });

      try {
        // Send the email
        await transporter.sendMail({
          from: "your-email@example.com",
          to: "your-email@example.com",
          subject: "New contact form submission",
          text: `
            Name: ${name}
            Email: ${email}
            Organization: ${organization}
            Text: ${text}
          `,
        });

        return {
          statusCode: 200,
          body: "Email sent successfully",
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: "Failed to send email" }),
        };
      }
    };

  return (
    <form className="contact">
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

      <button type="submit" className="contact__button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Contact;
