import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import logo from "../images/saalla-5.png";
import { Link, withRouter } from "react-router-dom";
import "./index.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Navbar extends Component {
  render() {
    return (
      <Sider>
        <div className="logo">
          <Link className="logo" to="/">
            <img alt="logo" src={logo} style={{ width: "100%" }} />
          </Link>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[this.props.match.path]}
          mode="inline"
        >
          <Menu.Item key="/dashboard" icon={<PieChartOutlined />}>
            <Link to="/dashboard">Anasayfa</Link>
          </Menu.Item>

          <SubMenu key="/users" icon={<UserOutlined />} title="Kullanıcılar">
            <Menu.Item key="2">
              <Link to="/users">Tüm Kullanıcılar</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="/communities"
            icon={<TeamOutlined />}
            title="Topluluk İşlemleri"
          >
            <Menu.Item key="3">
              <Link to="/communities">Tüm Topluluklar</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="/categories"
            icon={<BarsOutlined />}
            title="Kategoriler"
          >
            <Menu.Item key="4">
              <Link to="/categories">Tüm Kategoriler</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default withRouter(Navbar);
