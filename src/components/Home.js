import React, { useState } from "react";
import "../styles/Home.css";
import ImageGallery from "react-image-gallery";
import tovie from "../images/Tovie.JPG";
import pip from "../images/combo-pip.jpeg";
import rumi from "../images/combo-rumi.jpeg";
import cats2 from "../images/Cats2.jpeg";
import sequoia from "../images/Sequoia.jpg";
import downwardKitty from "../images/combo-downward.jpeg";
import twodogs from "../images/combo-twodogs.jpeg";
import daschund from "../images/Daschund.JPEG";

const images = [
  { original: downwardKitty, thumbnail: downwardKitty },
  { original: pip, thumbnail: pip },
  { original: rumi, thumbnail: rumi },
  { original: daschund, thumbnail: daschund },
  { original: twodogs, thumbnail: twodogs },
  { original: sequoia, thumbnail: sequoia },
  { original: tovie, thumbnail: tovie },
  { original: cats2, thumbnail: cats2 },
];

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('/jessie-portfolio/api/contact', {
        method: 'POST',
        body: formData,
      });
      const result = await response.text();
      setStateMessage(result);
      setIsSubmitting(false);
      setTimeout(() => setStateMessage(null), 5000);
    } catch (error) {
      setStateMessage('Something went wrong, please try again later');
      setIsSubmitting(false);
      setTimeout(() => setStateMessage(null), 5000);
    }

    e.target.reset();
  };

  return (
    <div className="home-page">
      <div className="image-viewer">
        <ImageGallery items={images} />
      </div>
      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="instructions">
            <h2 className="inst-title">Pet Portraits: How can I get one?:</h2>
            <h3 className="instr-text">
              Submit a few photos of the person or animal and any details you'd
              like included in the image, such as plants, toys, etc.
            </h3>
          </div>
          <div className="form-input">
            <label>Name</label>
            <input className="text-input" type="text" name="name" required />
          </div>
          <br />
          <div className="form-input">
            <label>Email</label>
            <input className="text-input" type="email" name="email" required />
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
            <textarea className="text-input message-textarea" name="message" required />
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
