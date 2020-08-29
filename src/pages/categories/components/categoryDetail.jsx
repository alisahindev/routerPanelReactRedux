import React, { Component } from "react";
import { getCategoryDetail } from "../../../redux/categories/action";
import { connect } from "react-redux";
import CategoryCard from "./categoryCard";
import { Row } from "antd";

class CategoryDetail extends Component {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.getDetail(slug);
  }
  render() {
    const { detailCategory } = this.props;

    return (
      <div>
        <Row gutter={[32, 32]}>
          {detailCategory &&
            detailCategory.length > 0 &&
            detailCategory.map((category) => {
              return <CategoryCard detailCategory={category}></CategoryCard>;
            })}
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDetail: (payload) => dispatch(getCategoryDetail(payload)),
});

const mapStateToProps = (state) => ({
  detailCategory: state.categoryDetail.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
