import React, { Component } from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default class ContentWrapper extends Component {
  render() {
    return (
      <Content style={{ margin: "16px 16px" }}>{this.props.children}</Content>
    );
  }
}
