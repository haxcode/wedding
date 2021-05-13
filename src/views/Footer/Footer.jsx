import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

import "./Footer.scss";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { 
    copyright,
    social: { facebook, github, linkedin, instagram }
   } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col className="copyright credit">
            <div className="nameAndLink">
              ©&nbsp;
              <a 
                href="https://caitlinfloyd.com/"
                target="_blank"
                rel="noreferrer"
              >
                Caitlin Floyd
              </a>
              , 2020 and
              ©&nbsp;
              <a
                href="https://kubica.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Robert Kubica
              </a>
              , 2021
            </div>
          </Col> {/* copyright */}
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
