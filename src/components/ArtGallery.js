import "../styles/ArtGallery.css";
import "react-medium-image-zoom/dist/styles.css";
import React, { useEffect } from "react";
import ImageGrid from "./ImageGrid"; // Assuming ImageGrid component is imported from this path
import ImageGallery from "react-image-gallery";
import tovie from "../images/Tovie.JPG";
import pip from "../images/Pip-1.JPG";
import rumi from "../images/Rumi.JPG";
import cats2 from "../images/Cats2.jpeg";
import gladys from "../images/Gladys.jpeg";
import river from "../images/River.JPEG";
import sequoia from "../images/Sequoia.jpg";
import downwardKitty from "../images/downward-kitty.jpeg";
import twodogs from "../images/TwoDogs.JPEG";
import daschund from "../images/Daschund.JPEG";

export default function ArtGallery() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Render ImageGrid component after 5 seconds
      return () => clearTimeout(timer);
    }, 5000); // Delay of 5000 milliseconds (5 seconds)
  }, []);

  return (
    <div className="artgallery-page">
      {/* <ImageGrid /> */}
      <div className="img-display">
        <div className="img-row">
          <img alt="tovie" src={tovie} />
          <img alt="daschund" src={daschund} />
        </div>
        <div className="img-row">
          <img alt="downwardKitty" src={downwardKitty} />
          <img alt="rumi" src={rumi} />
        </div>
        <div className="img-row">
          <img alt="twodogs" src={twodogs} />
          <img alt="pip" src={pip} />
        </div>
        <div className="img-row">
          <img alt="sequoia" src={sequoia} />
          <img alt="river" src={river} />
        </div>
        <div className="img-row">
          <img alt="gladys" src={gladys} />
          <img alt="cats2" src={cats2} />
        </div>
      </div>
    </div>
  );
}
