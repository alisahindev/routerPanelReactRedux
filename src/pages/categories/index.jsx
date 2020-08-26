import React, { Component } from "react";
import { Table, Button } from "antd";
import {
  getAllCategoriesRequest,
  createCategorieRequest,
} from "../../redux/categories/action";
import { connect } from "react-redux";
import CreateCategoryModal from "./components/createCategoryModal";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "İsim",
    dataIndex: "displayName",
    key: "name",
  },
  {
    title: "Slug",
    dataIndex: "slug",
    key: "slug",
  },
  {
    title: "İşlem",
    key: "set",
    render: (text, data) => {
      return (
        <Button type="primary">
          <Link to={`/category/${data.slug}`}>İncele</Link>
        </Button>
      );
    },
  },
];
class Categories extends Component {
  state = {
    categories: [],
    visible: false,
  };

  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  onSubmit = (text) => {
    this.props.create({ displayName: text });
    this.setState({ visible: false });
  };

  render() {
    const {
      categories: { data },
    } = this.props;
    return (
      <>
        <div>
          <Button
            onClick={() => this.setState({ visible: true })}
            className="table_up_button"
            type="primary"
          >
            Kategori Ekle
          </Button>
        </div>
        <Table
          dataSource={data && data.length > 0 && data}
          columns={columns}
          pagination={{ pageSize: 20 }}
        />
        <CreateCategoryModal
          title="Kategori Olustur"
          onOk={this.onSubmit}
          onCancel={() => this.setState({ visible: false })}
          visible={this.state.visible}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getAllCategoriesRequest()),
  create: (payload) => dispatch(createCategorieRequest(payload)),
});

const mapStateToProps = (state) => ({
  categories: state.allCategories,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
