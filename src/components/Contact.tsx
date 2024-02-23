import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.scss";
import Popup from "./Popup";
import Alert from "./Alert";
import Spinner from "./Spinner";

type AlertProps = {
  status: "success" | "error" | "info";
  text: string;
};
const Contact: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const organizationRef = useRef<HTMLInputElement>(null);
  const [isShownAllert, setIsShownAlert] = useState(true);
  const [alertProps, setAlertProps] = useState<AlertProps>({
    status: "success",
    text: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("IU2Xd6AGrVn_7cJIR"), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send("service_a2k0mei", "template_ej0rav4", {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        text: textRef.current?.value,
        organization: organizationRef.current?.value,
      });
      setIsShownAlert(true);
      setAlertProps({
        status: "success",
        text: "Message sent successfully!",
      });
      nameRef.current!.value = "";
      emailRef.current!.value = "";
      textRef.current!.value = "";
      organizationRef.current!.value = "";
    } catch (error) {
      setIsShownAlert(true);
      setAlertProps({
        status: "error",
        text: "Something went wrong. Please try again later.",
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    if (isShownAllert) {
      const timer = setTimeout(() => {
        setIsShownAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isShownAllert]);

  return (
    <div className="contact">
      <form className="contact__form" onSubmit={handleSubmit}>
        {isShownAllert && (
          <Popup
            handleClosePopup={() => setIsShownAlert(false)}
            children={<Alert {...alertProps} />}
          />
        )}
        <h2 className="contact__title">Contact me</h2>
        <p className="contact__description">
          If you want to get in touch with me, please fill out the form below.
        </p>
        <div className="contact__field">
          <label htmlFor="name" className="contact__label">
            Name:
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            className="contact__input"
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
            ref={emailRef}
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
            ref={organizationRef}
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
            ref={textRef}
            required
          />
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <button type="submit" className="contact__button button">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
