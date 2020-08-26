import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsersRequest } from "../../redux/users/action";
import UserCardComponent from "./components/userCardComponent";

class Users extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }
  render() {
    const { users } = this.props;
    return (
      <div className="userCard">
        {users &&
          users.length > 0 &&
          users.map((user) => (
            <div key={user.id}>
              {
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
              }
            </div>
          ))}
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
