import React, { useState, useEffect } from "react";
import { Row, Col, Button, Modal } from "antd";
import "./ModalVideo.scss";

import ReactPlayer from "react-player";
import { switchCase } from "@babel/types";

export default function ModalVideo(props) {
  const { videoKey, videoPlatform, isOpen, close } = props;
  const [urlVideo, setUrlVideo] = useState(null);
  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
  }, [videoKey, videoPlatform]);
  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centred
      onCancel={close}
      footer={false}
    >
      <ReactPlayer url={urlVideo} controls />
    </Modal>
  );
}
