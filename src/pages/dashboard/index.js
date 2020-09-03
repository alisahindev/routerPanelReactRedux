import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsersRequest } from "../../redux/users/action";
import { getAllCommunitiesRequest } from "../../redux/communities/action";
import DashboardListComponent from "./components/dashboardListComponent";
import DisplayInformationCard from "./components/displayInformationCard";
import UserCardComponent from "../users/components/userCardComponent";
import { Row, Col, Divider } from "antd";
import { getAllCategoriesRequest } from "../../redux/categories/action";
import DashboardCardComponent from "./components/dashboardCardComponent";

class Dashboard extends Component {
  componentDidMount() {
    const { getUser, getCommunities, getCategories } = this.props;
    getUser();
    getCommunities();
    getCategories();
  }

  render() {
    const { users, communities, categories } = this.props;
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
              categories={categories}
            ></DisplayInformationCard>
          </Col>
        </Row>
        <Row justify="space-around" gutter={[48, 16]}>
          <Divider orientation="left">Son Kayıt Olan 5 Kullanıcı</Divider>
          {data &&
            data.length > 0 &&
            data.map((user) => {
              return (
                <Col
                  className="gutter-row"
                  xs={20}
                  sm={16}
                  md={12}
                  lg={8}
                  xl={6}
                >
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
          <Col className="gutter-row" xs={20} sm={16} md={12}>
            <Divider orientation="left">Topluluklar</Divider>
            <DashboardListComponent communities={communities} />
          </Col>
          <Col className="gutter-row" xs={20} sm={16} md={12}>
            <Row justify="space-around" gutter={[16, 16]}>
              <Divider orientation="left">Kategoriler</Divider>

              <DashboardCardComponent categories={categories} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getAllUsersRequest()),
  getCommunities: () => dispatch(getAllCommunitiesRequest()),
  getCategories: () => dispatch(getAllCategoriesRequest()),
});

const mapStateToProps = (state) => ({
  users: state.allUsers.data,
  communities: state.allCommunities.data,
  categories: state.allCategories.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
