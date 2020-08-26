import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsersRequest } from "../../redux/users/action";
import { getAllCommunitiesRequest } from "../../redux/communities/action";
import DashboardListComponent from "./components/dashboardListComponent";
import DashboardCardComponent from "./components/dashboardCardComponent";

class Dashboard extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
    const { getCommunities } = this.props;
    getCommunities();
  }

  render() {
    const { users } = this.props;
    const data =
      users && users.length > 0 && users.slice(users.length - 5, users.length);
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div>
          <DashboardCardComponent users={data}></DashboardCardComponent>
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <DashboardListComponent
            communities={this.props.communities}
          ></DashboardListComponent>
        </div>
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
