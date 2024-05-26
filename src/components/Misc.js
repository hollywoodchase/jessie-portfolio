import "../styles/ArtGallery.css";
import "react-medium-image-zoom/dist/styles.css";
import React, { useEffect } from "react";
import MiscImageGrid from "./MiscImageGrid"; // Assuming ImageGrid component is imported from this path
import ImageGallery from "react-image-gallery";
import hearts from "../images/Hearts.JPEG";
import disconap from "../images/DiscoNap.jpg";
import souppattern from "../images/SoupPattern.jpg";
import lovebirds from "../images/LoveBirds.jpg";
import northernlights from "../images/NorthernLights.JPG";


export default function ArtGallery() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Render ImageGrid component after 5 seconds
      return () => clearTimeout(timer);
    }, 5000); // Delay of 5000 milliseconds (5 seconds)
  }, []);

  return (
    <div className="artgallery-page">
      {/* <MiscImageGrid /> */}
      <div className="img-display">
      <div className="img-row">
          <img alt="disconap" src={disconap} />
          <img alt="souppattern" src={souppattern} />
        </div>
        <div className="img-row">
          <img alt="hearts" src={hearts} />
          <img alt="lovebirds" src={lovebirds} />
        </div>
        
        <div className="img-row">
          <img alt="northernlights" src={northernlights} />
        </div>

      </div>
    </div>
  );

}
