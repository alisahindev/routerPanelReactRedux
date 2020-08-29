import React, { Component } from "react";
import { Button } from "antd";
import {
  getAllCategoriesRequest,
  createCategorieRequest,
} from "../../redux/categories/action";
import { connect } from "react-redux";
import CreateCategoryModal from "./components/createCategoryModal";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";

class Categories extends Component {
  state = {
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
    const { categories } = this.props;
    return (
      <>
        <div className="site-card-wrapper">
          <Row gutter={[16, 16]}>
            {categories &&
              categories.length > 0 &&
              categories.map((category) => {
                return (
                  <Col span={8}>
                    <Card
                      style={{ borderRadius: "10px" }}
                      title={category.displayName}
                      bordered={false}
                    >
                      <Button type="primary">
                        <Link to={`/category/${category.slug}`}>İncele</Link>
                      </Button>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
        <div>
          <Button
            onClick={() => this.setState({ visible: true })}
            className="table_up_button"
            type="primary"
          >
            Kategori Ekle
          </Button>
        </div>

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
  categories: state.allCategories.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
