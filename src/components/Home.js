import React, { useState } from "react";
import "../styles/Home.css";
import ImageGallery from "react-image-gallery";
import tovie from "../images/Tovie.JPG";
import pip from "../images/Pip-1.JPG";
import rumi from "../images/Rumi.JPG";
import emailjs from "@emailjs/browser";
import cats2 from "../images/Cats2.jpeg";
import disconap from "../images/DiscoNap.jpg";
import northernlights from "../images/NorthernLights.JPG";

import sequoia from "../images/Sequoia.jpg";
import downwardKitty from "../images/downward-kitty.jpeg";
import twodogs from "../images/TwoDogs.JPEG";
import daschund from "../images/Daschund.JPEG";

const images = [
  {
    original: downwardKitty,
    thumbnail: downwardKitty,
  },
  {
    original: pip,
    thumbnail: pip,
  },
  {
    original: rumi,
    thumbnail: rumi,
  },
  {
    original: daschund,
    thumbnail: daschund,
  },
  {
    original: twodogs,
    thumbnail: twodogs,
  },
  {
    original: sequoia,
    thumbnail: sequoia,
  },
  {
    original: tovie,
    thumbnail: tovie,
  },
  {
    original: cats2,
    thumbnail: cats2,
  },
];

const Home = () => {
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
    <div className="home-page">
      <div className="image-viewer">
        <ImageGallery items={images} />
      </div>
      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="instructions">
            <h2 className="inst-title">Pet Portraits: How can I get one?:</h2>
            <h3 className="instr-text">
            Submit a few photos of the person or animal and any details you'd
            like included in the image, such as plants, toys, etc.
            </h3>
          </div>
          <div className="form-input">
            <label>Name</label>
            <input className="text-input" type="text" name="user_name" />
          </div>
          <br />
          <div className="form-input">
            <label>Email</label>
            <input className="text-input" type="email" name="user_email" />
          </div>
          <br />
          <div className="form-input">
            <label>Photo #1:</label>
            <input type="file" name="attachment1" />
          </div>
          <br />
          <div className="form-input">
            <label>Photo #2:</label>
            <input type="file" name="attachment2" />
          </div>
          <br />
          <div className="form-input">
            <label>Photo #3:</label>
            <input type="file" name="attachment3" />
          </div>
          <br />
          <div className="form-input">
            <label>Message</label>
            <textarea className="text-input message-textarea" name="message" />
          </div>
          <br />
          <input
            className="submit-btn"
            type="submit"
            value="Submit"
            disabled={isSubmitting}
          />
          {stateMessage && <p>{stateMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Home;
