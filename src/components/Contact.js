import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct FormData object to include form data and files
    const formData = new FormData(e.target);
    const files = [
      e.target.attachment1.files[0],
      e.target.attachment2.files[0],
      e.target.attachment3.files[0],
    ];

    // Append each file to the FormData object
    files.forEach((file, index) => {
      if (file) {
        formData.append(`attachment${index + 1}`, file);
      }
    });

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <br />
        <label>Email</label>
        <input type="email" name="user_email" />
        <br />
        <label>Photo #1:</label>
        <input type="file" name="attachment1" />
        <br />
        <label>Photo #2:</label>
        <input type="file" name="attachment2" />
        <br />
        <label>Photo #3:</label>
        <input type="file" name="attachment3" />
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
