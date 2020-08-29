import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsersRequest } from "../../redux/users/action";
import UserCardComponent from "./components/userCardComponent";
import { Row, Col } from "antd";

class Users extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }
  render() {
    const { users } = this.props;
    return (
      <div className="userCard">
        <Row gutter={[24, 24]}>
          {users &&
            users.length > 0 &&
            users.map((user) => (
              <div key={user.id}>
                {
                  <Col span={6}>
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
                }
              </div>
            ))}
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getAllUsersRequest()),
});

const mapStateToProps = (state) => ({
  users: state.allUsers.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
