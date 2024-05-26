import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../styles/TabHowItWorks.css";
// import ImageView from "./ImageView";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import realPip from "../images/real-pip.jpg";
import realRumi from "../images/real-rumi.jpeg";
import pip from "../images/Pip.jpg";
import rumi from "../images/Rumi.JPG";
import soupPattern from "../images/SoupPattern.jpg";
import realSequoia from "../images/real-sequoia.jpg";
import sequoia from "../images/Sequoia.jpg";
import SmoothImage from "react-smooth-image";

const TabHowItWorks = () => {
  return (
    <Tabs className="tabs">
      <TabList className="tab-list">
        <div className="tab">
          <Tab>Pet (and human!) Portraits</Tab>
        </div>
        <div className="tab">
          <Tab>Patterns & Wallpaper</Tab>
        </div>
      </TabList>

      <TabPanel>
        <PhotoProvider>
          <div className="portrait-wrapper">
            <div className="portrait-steps">
              <h2>
                <strong className="process-title">The Process:</strong>
              </h2>
              <div className="process-text-wrapper">
                <p className="process-text">
                  Submit a few photos of the person or animal and any details
                  you'd like included in the image, such as plants, toys, etc.
                </p>
              </div>
              <br />
            </div>
            <br />
            <div className="img-section">
              <div className="pip-imgs">
                <div className="row img-row">
                  <div className="img-wrapper">
                    <PhotoView className="pip-show2s" src={realPip}>
                      <SmoothImage
                        className="pip-show2s view-img"
                        src={realPip}
                        alt="Real Pip"
                        transitionTime={1.0}
                        //Other props if you choose to use them
                      />
                    </PhotoView>
                    <p className="text-label">The Original Photo</p>
                  </div>
                  <div className="img-wrapper">
                    <PhotoView className="pip-show2s" src={pip}>
                      <SmoothImage
                        className="pip-show2s view-img"
                        src={pip}
                        alt="Pip"
                      />
                    </PhotoView>
                    <p className="text-label">The Digital Portrait</p>
                  </div>
                </div>
              </div>
              <br />

              <div className="sequoia-imgs">
                <div className="row img-row">
                  <div className="img-wrapper">
                    <PhotoView className="sequoia-show2s" src={realSequoia}>
                      <SmoothImage
                        className="sequoia-show2s view-img"
                        src={realSequoia}
                        alt="Real Sequoia"
                      />
                    </PhotoView>
                    <p className="text-label">The Original Photo</p>
                  </div>
                  <div className="img-wrapper">
                    <PhotoView className="sequoia-show2s" src={sequoia}>
                      <SmoothImage
                        className="sequoia-show2s view-img"
                        src={sequoia}
                        alt="Sequoia"
                      />
                    </PhotoView>
                    <p className="text-label">The Digital Portrait</p>
                  </div>
                </div>
              </div>
              <br />

              <div className="rumi-imgs">
                <div className="row img-row">
                  <div className="img-wrapper">
                    <PhotoView className="rumi-show2s" src={realRumi}>
                      <SmoothImage
                        className="rumi-show2s view-img"
                        src={realRumi}
                        alt="Real Rumi"
                      />
                    </PhotoView>
                    <p className="text-label">The Original Photo</p>
                  </div>
                  <div className="img-wrapper">
                    <PhotoView className="rumi-show2s" src={rumi}>
                      <SmoothImage
                        className="rumi-show2s view-img"
                        src={rumi}
                        alt="rumi"
                      />
                    </PhotoView>
                    <p className="text-label">The Digital Portrait</p>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </PhotoProvider>
      </TabPanel>
      <TabPanel>
        <PhotoProvider>
          <div className="portrait-wrapper">
            <div className="portrait-steps">
              <h4>
                <strong className="process-title">The Process:</strong>
              </h4>
              <div className="process-text-wrapper">
                <p className="process-text">
                  Tell me about the mood and feeling you want the pattern to
                  evoke, as well as what images you want it to have
                </p>
              </div>
            </div>
            <div>
              <br />

              <div className="soup-imgs">
                <div className="row img-row">
                  <div className="img-wrapper">
                    <div className="description-text">
                      <div className="paper">
                        <p>
                          <span className="black">*</span> A delicious motzoh
                          ball soup!
                        </p>
                        <p>
                          <span className="black">*</span> Salt and pepper and
                          dill
                        </p>
                        <p>
                          <span className="black">*</span> Colors: green,
                          yellow, red
                        </p>
                        <p>and light blue</p>
                        <p>
                          <span className="black">*</span> Homemade feel
                        </p>
                      </div>
                    </div>
                    <p className="text-label">The Description</p>
                  </div>
                  <div className="img-wrapper">
                    <PhotoView className="soup-show2s" src={soupPattern}>
                      <SmoothImage
                        className="soup-show2s view-img"
                        src={soupPattern}
                        alt="SoupPattern"
                      />
                    </PhotoView>
                    <p className="text-label">The Digital Pattern</p>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </PhotoProvider>
      </TabPanel>
      {/* <TabPanel>
      <PhotoProvider>
          <div className="portrait-wrapper">
            <div className="portrait-steps">
              <h4>
                <strong className="process-title">The Process:</strong>
              </h4>
              <div className="process-text-wrapper">
                <p className="process-text">
                  Describe the 
                </p>
              </div>
              </div><div>
              <br />

              <div className="soup-imgs">
                <div className="row img-row">
                  <div className="img-wrapper">
                    <div className="description-text">
                      <div className="paper">
                        <p><span className="black">*</span> A delicious motzoh ball soup!</p>
                        <p><span className="black">*</span> Salt and pepper and dill</p>
                        <p><span className="black">*</span> Colors: green, yellow, red</p>
                        <p>and light blue</p>
                        <p><span className="black">*</span> Homemade feel</p>
                      </div>
                    </div>
                    <p className="text-label">The Description</p>
                  </div>
                  <div className="img-wrapper">
                    <PhotoView className="soup-show2s" src={soupPattern}>
                      <SmoothImage
                        className="soup-show2s view-img"
                        src={soupPattern}
                        alt="SoupPattern"
                      />
                    </PhotoView>
                    <p className="text-label">The Digital Portrait</p>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </PhotoProvider>
      </TabPanel> */}
    </Tabs>
  );
};

export default TabHowItWorks;
