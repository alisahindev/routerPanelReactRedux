import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import logo from "../images/saalla-5.png";
import { withRouter, NavLink } from "react-router-dom";
import "./index.css";
import history from "../../history";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        collapsedWidth="0"
      >
        <div className="logo">
          <NavLink className="logo" to="/">
            <img alt="logo" src={logo} style={{ width: "100%" }} />
          </NavLink>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[`${this.props.location.pathname}`]}
          mode="inline"
        >
          <Menu.Item
            key="/dashboard"
            onClick={() => history.push("/dashboard")}
            icon={<PieChartOutlined />}
          >
            <span>Anasayfa</span>
          </Menu.Item>

          <SubMenu key="sub1" icon={<UserOutlined />} title="Kullanıcılar">
            <Menu.Item key="/users" onClick={() => history.push("/users")}>
              <span>Tüm Kullanıcılar</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<TeamOutlined />}
            title="Topluluk İşlemleri"
          >
            <Menu.Item
              key="/communities"
              onClick={() => history.push("/communities")}
            >
              <span>Tüm Topluluklar</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<BarsOutlined />} title="Kategoriler">
            <Menu.Item
              key="/categories"
              onClick={() => history.push("/categories")}
            >
              <span>Tüm Kategoriler</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default withRouter(Navbar);
