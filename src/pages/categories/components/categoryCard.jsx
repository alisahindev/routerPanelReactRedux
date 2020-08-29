import React, { Component } from "react";
import { Card, Col, Divider } from "antd";
import Avatar from "antd/lib/avatar/avatar";

const { Meta } = Card;

class CategoryCard extends Component {
  render() {
    const { detailCategory } = this.props;
    return (
      <Col span={12}>
        <Card
          style={{
            borderRadius: 10,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.4);",
          }}
          hoverable
          cover={
            <Avatar
              size={200}
              alt={detailCategory.name}
              src={
                (detailCategory.logoPath && detailCategory.logoPath) ||
                "https://upload.wikimedia.org/wikipedia/tr/c/cc/Be%C5%9Fikta%C5%9F_Esports_logo.png"
              }
            />
          }
        >
          <Meta
            title={detailCategory.name}
            description={detailCategory.description}
          />
          <Divider>Üye sayısı : {detailCategory.memberCount}</Divider>
        </Card>
      </Col>
    );
  }
}
export default CategoryCard;
