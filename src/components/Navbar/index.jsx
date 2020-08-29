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
      >
        <div className="logo">
          <NavLink className="logo" to="/">
            <img alt="logo" src={logo} style={{ width: "100%" }} />
          </NavLink>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <NavLink to="/dashboard">Anasayfa</NavLink>
          </Menu.Item>

          <SubMenu key="sub1" icon={<UserOutlined />} title="Kullanıcılar">
            <Menu.Item key="2">
              <NavLink to="/users">Tüm Kullanıcılar</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<TeamOutlined />}
            title="Topluluk İşlemleri"
          >
            <Menu.Item key="3">
              <NavLink to="/communities">Tüm Topluluklar</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<BarsOutlined />} title="Kategoriler">
            <Menu.Item key="4">
              <NavLink to="/categories">Tüm Kategoriler</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default withRouter(Navbar);
