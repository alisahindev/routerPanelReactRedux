import React from "react";
import Navbar from "../../../components/Navbar";
import { Layout } from "antd";
import HeaderWrapper from "../../../components/header";

const { Content } = Layout;

export default function AuthLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <HeaderWrapper />
        <Content style={{ margin: "16px 16px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
}
