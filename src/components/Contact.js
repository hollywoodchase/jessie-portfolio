import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        body: formData
      });
      const result = await response.text();
      setStateMessage(result);
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000); // hide message after 5 seconds
    } catch (error) {
      setStateMessage("Something went wrong, please try again later");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000); // hide message after 5 seconds
    }

    e.target.reset();
  };

  return (
    <div className="contact-page">
      <form className="contact-form" onSubmit={sendForm}>
        <label>Name</label>
        <input type="text" name="name" />
        <br />
        <label>Email</label>
        <input type="email" name="email" />
        <br />
        <label>Photo #1:</label>
        <input type="file" name="attachments" />
        <br />
        <label>Photo #2:</label>
        <input type="file" name="attachments" />
        <br />
        <label>Photo #3:</label>
        <input type="file" name="attachments" />
        <br />
        <label>Message</label>
        <textarea className="message-textarea" name="message" />
        <br />
        <input className="submit-btn" type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
