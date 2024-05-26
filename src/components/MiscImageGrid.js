import React from "react";
import "../styles/ImageGrid.css";
import tovie from "../images/Tovie.JPG";
import cats2 from "../images/Cats2.jpeg";
import hearts from "../images/Hearts.JPEG";
import gladys from "../images/Gladys.jpeg";
import river from "../images/River.JPEG";
import disconap from "../images/DiscoNap.jpg";
import souppattern from "../images/SoupPattern.jpg";
import rumi from "../images/Rumi.JPG";
import lovebirds from "../images/LoveBirds.jpg";
import northernlights from "../images/NorthernLights.JPG";
import pip from "../images/Pip-1.JPG";
import sequoia from "../images/Sequoia.jpg";
import downwardKitty from "../images/downward-kitty.jpeg";
import twodogs from "../images/TwoDogs.JPEG"
import daschund from "../images/Daschund.JPEG"
import Zoom from "react-medium-image-zoom";
import SmoothImage from "react-smooth-image";
import {
  PhotoAlbum,
  RenderContainer,
  RenderPhoto,
  RenderRowContainer,
} from "react-photo-album";

const photos = [
  { src: souppattern, width: 800, height: 800 },
  { src: northernlights, width: 600, height: 800 },
  { src: lovebirds, width: 600, height: 800 },
  { src: hearts, width: 600, height: 800 },
  { src: disconap, width: 600, height: 800 },
];

const renderPhoto: RenderPhoto = ({
  imageProps: { alt, style, ...restImageProps },
}) => (
  <div>
    <Zoom>
      <img
        alt={alt}
        style={{ ...style, width: "100%", padding: 0 }}
        {...restImageProps}
      />
    </Zoom>
  </div>
);
export default function MiscImageGrid() {
  return (
    <div>
      <PhotoAlbum layout="columns" photos={photos} renderPhoto={renderPhoto} />
    </div>
  );
}
