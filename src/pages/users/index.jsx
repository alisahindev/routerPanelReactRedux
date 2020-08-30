import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsersRequest } from "../../redux/users/action";
import UserCardComponent from "./components/userCardComponent";
import { Row, Col, Form, Input } from "antd";

class Users extends Component {
  state = {
    filteredUsers: [],
  };

  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  onChange = (e) => {
    const target = e.target.value;
    const filterUser = this.props.users.filter((user) => {
      return user.username.includes(target);
    });
    this.setState({ filteredUsers: filterUser });
  };

  render() {
    const { users } = this.props;
    const { filteredUsers } = this.state;
    return (
      <div className="userCard">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Form>
              <Form.Item onChange={this.onChange} label="Kullanıcı Ara">
                <Input placeholder="Aramak istediğiniz kullanıcı adını girin" />
              </Form.Item>
            </Form>
          </Col>
          {filteredUsers.length === 0
            ? users &&
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
              ))
            : filteredUsers.map((user) => (
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
