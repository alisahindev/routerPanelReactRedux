import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsersRequest } from "../../redux/users/action";
import { getAllCommunitiesRequest } from "../../redux/communities/action";
import DashboardListComponent from "./components/dashboardListComponent";
import DisplayInformationCard from "./components/displayInformationCard";
import UserCardComponent from "../users/components/userCardComponent";
import { Row, Col, Divider } from "antd";

class Dashboard extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
    const { getCommunities } = this.props;
    getCommunities();
  }

  render() {
    const { users, communities } = this.props;
    const data =
      users && users.length > 0 && users.slice(users.length - 4, users.length);

    return (
      <div>
        <Row>
          <Col span={24}>
            <Divider orientation="left">İstatistik</Divider>
            <DisplayInformationCard
              communities={communities}
              users={users}
            ></DisplayInformationCard>
          </Col>
        </Row>
        <Row>
          <Divider orientation="left">Son Kayıt Olan 5 Kullanıcı</Divider>
          {data &&
            data.length > 0 &&
            data.map((user) => {
              return (
                <Col className="gutter-row" span={6}>
                  <UserCardComponent
                    username={user.username}
                    profileImagePath={user.profileImagePath}
                    bio={user.bio}
                    emailAddress={user.emailAddress}
                    createdDate={user.createdDate}
                    sPoint={user.sPoint}
                    id={user.id}
                    gender={user.gender}
                  ></UserCardComponent>
                </Col>
              );
            })}
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <Divider orientation="left">Topluluklar</Divider>
            <DashboardListComponent
              communities={communities}
            ></DashboardListComponent>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getAllUsersRequest()),
  getCommunities: () => dispatch(getAllCommunitiesRequest()),
});

const mapStateToProps = (state) => ({
  users: state.allUsers.data,
  communities: state.allCommunities.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
