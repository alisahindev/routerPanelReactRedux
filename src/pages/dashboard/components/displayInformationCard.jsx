import React from "react";
import { Statistic, Card, Row, Col } from "antd";
import {
  ProjectFilled,
  SmileFilled,
  MessageFilled,
  AlignCenterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const DisplayInformationCard = ({ users, communities, categories }) => {
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={[48, 16]}>
        <Col xs={20} sm={16} md={12} lg={6}>
          <Link to="/users">
            <Card
              style={{ backgroundColor: "#e91e63" }}
              className="dashboard-card"
            >
              <Statistic
                title="Toplam Kullanıcı"
                value={users && users.length}
                valueStyle={{ color: "#fff" }}
                prefix={<SmileFilled />}
              />
            </Card>
          </Link>
        </Col>
        <Col xs={20} sm={16} md={12} lg={6}>
          <Link to="/communities">
            <Card
              style={{ backgroundColor: "#00bcd4" }}
              className="dashboard-card"
            >
              <Statistic
                title="Toplam Topluluk"
                value={communities && communities.length}
                valueStyle={{ color: "#fff" }}
                prefix={<ProjectFilled />}
              />
            </Card>
          </Link>
        </Col>
        <Col xs={20} sm={16} md={12} lg={6}>
          <Link to="/categories">
            <Card
              style={{ backgroundColor: "#8bc34a" }}
              className="dashboard-card"
            >
              <Statistic
                title="Kategori Sayısı"
                value={categories && categories.length}
                valueStyle={{ color: "#fff" }}
                prefix={<AlignCenterOutlined />}
              />
            </Card>
          </Link>
        </Col>
        <Col xs={20} sm={16} md={12} lg={6}>
          <Link>
            <Card
              style={{ backgroundColor: "#ff9800" }}
              className="dashboard-card"
            >
              <Statistic
                title="Toplam Gönderiler"
                value="116"
                valueStyle={{ color: "#fff" }}
                prefix={<MessageFilled />}
              />
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default DisplayInformationCard;
