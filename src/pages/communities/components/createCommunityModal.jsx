import React, { Component } from "react";
import Modal from "antd/lib/modal/Modal";
import { Input, Select, Divider } from "antd";
import { Option } from "antd/lib/mentions";
import { connect } from "react-redux";
import { getAllCategoriesRequest } from "../../../redux/categories/action";

class CreateCommunityModal extends Component {
  state = {
    name: "",
    description: "",
    catSlug: "",
  };

  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  handleChange = ({ currentTarget: input, target: { value } }) => {
    this.setState({ [input.id]: value });
  };

  selectChange = (value) => {
    this.setState({ catSlug: value });
  };

  onSubmit = () => {
    this.props.onOk({ ...this.state });
  };

  render() {
    const { title, visible, onCancel, categories } = this.props;
    return (
      <Modal
        title={title}
        visible={visible}
        onOk={this.onSubmit}
        onCancel={onCancel}
      >
        <Divider>Topluluk Adı</Divider>
        <Input
          placeholder="Topluluk adını girin"
          id="name"
          onChange={this.handleChange}
        />
        <Divider>Kategori</Divider>
        <Select
          onChange={this.selectChange}
          id="catSlug"
          placeholder="Lütfen kategori seçin"
        >
          {categories &&
            categories.length > 0 &&
            categories.map((category) => (
              <Option value={category.slug}>{category.displayName}</Option>
            ))}
        </Select>
        <Divider>Açıklama</Divider>
        <Input.TextArea
          id="description"
          placeholder="Açıklama giriniz"
          onChange={this.handleChange}
        />
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getAllCategoriesRequest()),
});

const mapStateToProps = (state) => ({
  categories: state.allCategories.data,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCommunityModal);
