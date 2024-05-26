import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import realPip from "../images/real-pip.jpg";
import pip from "../images/Pip-1.JPG";
import realSequoia from "../images/real-sequoia.jpg";
import sequoia from "../images/Sequoia.jpg";
import arrowLeft from "../images/arrow-left.png";
import arrowRight from "../images/arrow-right.png";
import "../styles/ImageView.css";
import SmoothImage from "react-smooth-image";

export default function ImageView() {
  return (
    <PhotoProvider>
      <div className="row img-row">
        <PhotoView src={realPip}>
          <SmoothImage className="view-img" src={realPip} alt="Real Pip" />
        </PhotoView>
        <div className="pip-gap">
          <div className="pip-gap-top">
            <SmoothImage
              className="arrow-left"
              src={arrowLeft}
              alt="Arrow Left"
            />
            <p>This is the original image</p>
          </div>

          <div className="click-message">
            (click the images for a closer look!)
          </div>
          <div className="pip-gap-bottom">
            <p>And this is the digital portrait!</p>
            <SmoothImage
              className="arrow-right"
              src={arrowRight}
              alt="Arrow
            Right"
            />
          </div>
        </div>
        <PhotoView src={pip}>
          <SmoothImage className="view-img" src={pip} alt="Real Pip" />
        </PhotoView>
      </div>
      <div className="row img-row">
        <PhotoView src={realSequoia}>
          <SmoothImage
            className="view-img"
            src={realSequoia}
            alt="Real Sequoia"
          />
        </PhotoView>
        <PhotoView src={sequoia}>
          <SmoothImage className="sq-img view-img" src={sequoia} alt="Pip" />
        </PhotoView>
      </div>
    </PhotoProvider>
  );
}
