import React, { Component } from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";

class DashboardCardComponent extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <List
          dataSource={users || []}
          size="large"
          renderItem={(item) => (
            <List.Item key={item.username}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={
                      item.profileImagePath
                        ? `https://saallaaccount.blob.core.windows.net/saallacontainer/${item.profileImagePath}`
                        : "https://upload.wikimedia.org/wikipedia/tr/c/cc/Be%C5%9Fikta%C5%9F_Esports_logo.png"
                    }
                  />
                }
                title={<Link to="/users">{item.username}</Link>}
                description={item.emailAddress}
              />
              {item.bio}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default DashboardCardComponent;
