import React from "react";
import { Statistic, Card, Row, Col } from "antd";
import { ProjectFilled, SmileFilled } from "@ant-design/icons";

const DisplayInformationCard = ({ users, communities }) => {
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={6}>
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
        </Col>
        <Col span={6}>
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
        </Col>
        <Col span={6}>
          <Card
            style={{ backgroundColor: "#8bc34a" }}
            className="dashboard-card"
          >
            <Statistic
              title="Kategori Sayısı"
              value={communities && communities.length}
              valueStyle={{ color: "#fff" }}
              prefix={<ProjectFilled />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{ backgroundColor: "#ff9800" }}
            className="dashboard-card"
          >
            <Statistic
              title="Toplam Gönderiler"
              value={communities && communities.length}
              valueStyle={{ color: "#fff" }}
              prefix={<ProjectFilled />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DisplayInformationCard;
