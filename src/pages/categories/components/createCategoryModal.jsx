import React, { Component } from "react";
import { Modal, Input } from "antd";

class CreateCategoryModal extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { title, visible, onOk, onCancel } = this.props;
    return (
      <Modal
        title={title}
        visible={visible}
        onOk={() => onOk(this.state.text)}
        onCancel={onCancel}
      >
        <Input onChange={this.handleChange} />
      </Modal>
    );
  }
}

export default CreateCategoryModal;
