import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import logo from "../images/saalla-5.png";
import { Link } from "react-router-dom";
import "./index.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Navbar extends Component {
  render() {
    return (
      <Sider>
        <div className="logo">
          <Link className="logo" to="/">
            <img alt="logo" src={logo} style={{ width: "100%" }} />
          </Link>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/dashboard">Anasayfa</Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<UserOutlined />} title="Kullanıcılar">
            <Menu.Item key="2">
              <Link to="/users">Tüm Kullanıcılar</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<TeamOutlined />}
            title="Topluluk İşlemleri"
          >
            <Menu.Item key="3">
              <Link to="/communities">Tüm Topluluklar</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<BarsOutlined />} title="Kategoriler">
            <Menu.Item key="4">
              <Link to="/categories">Tüm Kategoriler</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
