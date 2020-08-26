import React, { Component } from "react";
import { Card, Avatar } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import UserDetailDrawer from "./userDetailDrawer";

const { Meta } = Card;

class UserCardComponent extends Component {
  state = {
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { username, bio, profileImagePath } = this.props;

    return (
      <Card
        style={{ width: 300, maxHeight: 700, marginTop: "1rem" }}
        cover={
          <img
            style={{ width: 300, height: 300 }}
            alt={username}
            src={
              profileImagePath
                ? `https://saallaaccount.blob.core.windows.net/saallacontainer/${profileImagePath}`
                : "https://upload.wikimedia.org/wikipedia/tr/c/cc/Be%C5%9Fikta%C5%9F_Esports_logo.png"
            }
          />
        }
        actions={[<SettingOutlined onClick={this.showDrawer} key="setting" />]}
      >
        <Meta
          avatar={
            <Avatar
              src={
                profileImagePath
                  ? `https://saallaaccount.blob.core.windows.net/saallacontainer/${profileImagePath}`
                  : "https://upload.wikimedia.org/wikipedia/tr/c/cc/Be%C5%9Fikta%C5%9F_Esports_logo.png"
              }
            />
          }
          title={username}
          description={bio}
        />
        <UserDetailDrawer
          showDrawer={this.showDrawer}
          onClose={this.onClose}
          visible={this.state.visible}
          username={this.props.username}
          profileImagePath={this.props.profileImagePath}
          bio={this.props.bio}
          emailAddress={this.props.emailAddress}
          createdDate={this.props.createdDate}
          sPoint={this.props.sPoint}
          id={this.props.id}
          gender={this.props.gender}
        ></UserDetailDrawer>
      </Card>
    );
  }
}

export default UserCardComponent;
