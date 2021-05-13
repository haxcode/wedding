import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Notifications, { notify } from "react-notify-toast";


import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Youtube from "content/assets/images/portfolio/Youtube.png";
import YoutubeHover from "content/assets/images/portfolio/YoutubeHover.png";
import "./Ceremony.scss";

const Ceremony = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader } = frontmatter;

  const copiedToClipboard= () => {
    const alertColor = { background: "#9ebc9f", text: "white" };
    notify.show(
      "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
      "custom",
      5000,
      alertColor
    );
  }

  const Completionist = () => {
    return (
      <span className="finishedCountdown">
        <div className="countdownIntro">
            Ślub możesz obejrzeć na żywo!
          </div>
          <div className="joinButtonWrapper">
            <div>
              <a
                href="https://www.youtube.com/channel/UCOCTLKdKreaa20IzysXC1rg"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                  <p className="buttonTitle">Dołącz!</p>
                </Button> <br/>
              </a>
            </div>
          </div> {/* joinButtonWrapper */}
          <div className="vendors">
            <p>
              Miejsce -
              <a
                href="https://www.youtube.com/channel/UCOCTLKdKreaa20IzysXC1rg"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                Kościół pw. M.B. Częstochowskiej w Kosztowach
              </a>
            </p>
            <p>
              Fotograf -
              <a
                href="https://grupa.koszowski.art.pl/"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                KOSZOWSKI Group
              </a>
              !
            </p>
          </div> {/* vendors */}
      </span> // finishedCountdown
    )
  }

      
  const renderer = () => {
      return <Completionist />;
  };

  return (
    <div className="outerWrapper">
      <PageSection className={clsx("ceremony-section", className)} id={anchor}>
        <Notifications options={{zIndex: 200, top: '50px'}} />
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header={header} subheader={subheader}/>
            <div className="joinButtonWrapper">
              <div>
                <a
                  href="https://www.youtube.com/channel/UCOCTLKdKreaa20IzysXC1rg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                    <p className="buttonTitle">Obejrzyj ceremonię</p>
                  </Button> <br/>
                </a>
              </div>
            </div> {/* joinButtonWrapper */}
        </Row>
        <div className="countdownAndVideoDiv">
          <Row className="vendorDiv">
            <span className="finishedCountdown">
              
              <div className="vendors">
                <p className="singleVendor">
                  Miejsce ślubu -
                  <a
                    href="https://www.youtube.com/channel/UCOCTLKdKreaa20IzysXC1rg"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kościół pw. M.B. Częstochowskiej w Kosztowach
                  </a>
                </p> {/* singleVendor */}
                <p className="singleVendor">
                  Fotograf -
                  <a
                    href="https://grupa.koszowski.art.pl/"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    KOSZOWSKI Group
                  </a>
                </p> {/* singleVendor */}
              </div> {/* vendors */}
            </span> {/* finished countdown */}
          </Row> {/* vendorDiv */}
          <Row className="videoDiv">
            <a
              href="https://www.youtube.com/channel/UCOCTLKdKreaa20IzysXC1rg"
              target="_blank"
              rel="noreferrer"
              className="youtubeLink"
            >
              <div
                className="container"
              >
                <img 
                  src={Youtube} 
                  alt="youtubeLink" 
                  className="image"
                  width="560" 
                  height="auto"
                />
                <div className="middle">
                  <img 
                    src={YoutubeHover} 
                    alt="youtubeLink" 
                    className="imageHover"
                    width="560" 
                    height="auto"
                  />
                </div> {/* middle */}
              </div> {/* container */}
            </a>
          </Row> {/* videoDiv */}
        </div> {/* countdownAndVideoDiv */}
      </PageSection>
    </div>
  );
};

Ceremony.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Ceremony.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Ceremony;
