import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/Charity";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Giving.scss";

const Giving = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    teamMember
  } = frontmatter;

  return (
    <div>
      <PageSection className={className} id={anchor}>
        <Row>
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        </Row>
        <Row className="charities">
          <Col lg={8} className="mx-auto text-center">
            <p className="large text-muted">Zamiast obdarowywania Nas bukietem kwiatów chcielibyśmy, abyście rozważyli przekazanie darowizny na rzecz Funduszu Saletyńskiego, gdzie byliśmy wolontariuszami!</p>
          </Col>
        </Row>
        <Row>
          {teamMember.map(({ header, ...tmProps }) => (
            <Col sm={12} key={header}>
              <TeamMember header={header} {...tmProps} />
            </Col>
          ))}
        </Row>
      </PageSection>
    </ div>
  );
};

Giving.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Giving.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Giving;
