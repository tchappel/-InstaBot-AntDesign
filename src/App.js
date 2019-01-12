import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import styled from "styled-components";
import instabot from "./instabot.svg";

const { Header, Content, Footer } = Layout;

const NavbarWrapper = styled(Header)`
  width: 100%;
  position: fixed;
  zindex: 1;
  background-image: linear-gradient(to right, #8a3ab9, #bc2a8d);
`;

const Navigation = styled(Menu)`
  background-color: transparent;
`;

const App = () => (
  <Layout
    style={{
      height: "100vh"
    }}
  >
    <NavbarWrapper>
      <div
        style={{
          width: 120,
          height: 31,
          backgroundImage: `url(${instabot}), linear-gradient(to right, #fbad50, #e95950)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          margin: "16px 24px 16px 0",
          float: "left"
        }}
        className="logo"
      />
      <Navigation
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Navigation>
    </NavbarWrapper>
    <Content style={{ padding: "0 50px", marginTop: 64 }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: "#F9F9F9", padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default App;
