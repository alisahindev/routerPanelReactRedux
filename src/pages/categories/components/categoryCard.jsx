import React, { Component } from "react";
import { Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";

const { Meta } = Card;

class CategoryCard extends Component {
  render() {
    const { detailCategory } = this.props;
    return (
      <Card
        hoverable
        style={{
          width: "250px",
          display: "block",
          alignItems: "center",
          textAlign: "center",
        }}
        cover={
          <Avatar
            size={200}
            alt={detailCategory.name}
            src={detailCategory.logoPath && detailCategory.logoPath}
          />
        }
      >
        <Meta
          title={detailCategory.name}
          description={detailCategory.description}
        />
        <span style={{ paddingTop: "100px" }}>
          Üye sayısı : {detailCategory.memberCount}
        </span>
      </Card>
    );
  }
}
export default CategoryCard;
