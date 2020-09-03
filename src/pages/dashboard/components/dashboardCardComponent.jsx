import React, { Component } from "react";
import { Card, Col } from "antd";
import { Link } from "react-router-dom";
class DashboardCardComponent extends Component {
  render() {
    const { categories } = this.props;
    console.log(categories);
    return (
      <>
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            return (
              <Col span={6}>
                <Link to={`/category/${category.slug}`}>
                  <Card
                    className="dashboard-category-card"
                    style={{
                      borderRadius: 10,
                      boxShadow: 1,
                    }}
                  >
                    <span>{category.displayName}</span>
                  </Card>
                </Link>
              </Col>
            );
          })}
      </>
    );
  }
}

export default DashboardCardComponent;
