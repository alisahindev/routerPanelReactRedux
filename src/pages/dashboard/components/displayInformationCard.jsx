import React from "react";
import { Statistic, Card, Row, Col } from "antd";
import { ProjectFilled, SmileFilled } from "@ant-design/icons";

const DisplayInformationCard = ({ users, communities }) => {
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={6}>
          <Card className="dashboard-card">
            <Statistic
              title="Toplam Kullanıcı"
              value={users && users.length}
              valueStyle={{ color: "#3f8600" }}
              prefix={<SmileFilled />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="dashboard-card">
            <Statistic
              title="Toplam Topluluk"
              value={communities && communities.length}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ProjectFilled />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="dashboard-card">
            <Statistic
              title="Toplam Topluluk"
              value={communities && communities.length}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ProjectFilled />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="dashboard-card">
            <Statistic
              title="Toplam Topluluk"
              value={communities && communities.length}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ProjectFilled />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DisplayInformationCard;
