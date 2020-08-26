import React, { Component } from "react";
import { Modal, Avatar } from "antd";

export default class ImageModal extends Component {
  render() {
    const { visible, onOk, onCancel, title, imgPath } = this.props;
    return (
      <>
        <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
          <Avatar
            style={{ width: "auto", height: "auto" }}
            shape="square"
            src={imgPath}
          />
        </Modal>
      </>
    );
  }
}
