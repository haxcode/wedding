import React from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";
import Image from "components/Image";
import Icon from "./Icon";

const PhotoDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  extraInfo,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title> */}
      </Modal.Header>
      <Modal.Body className="mx-auto">
        {/* <p className="item-intro text-muted">{subheader}</p> */}
        <Image
          className="img-fluid d-block"
          fileName={imageFileName}
          alt={imageAlt || header || subheader}
          width="100%"
          height="auto"
        />
        <p>{content}</p>
        {/* {extraInfo} */}
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <Button variant="primary" onClick={onHide}>
            <Icon iconName="CloseIcon" />
            &nbsp; Close Photo
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

PhotoDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  extraInfo: PropTypes.any,
};

PhotoDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
  extraInfo: null,
};

export default PhotoDetailDialog;
