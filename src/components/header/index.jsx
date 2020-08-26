import React, { Component } from "react";

import { Layout } from "antd";

const { Header } = Layout;

export default class HeaderWrapper extends Component {
  render() {
    return (
      <Header
        className="site-layout-background"
        style={{ padding: 0 }}
      ></Header>
    );
  }
}
