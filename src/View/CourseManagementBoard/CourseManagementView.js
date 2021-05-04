import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Badge } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  MessageOutlined,
  DashboardOutlined,
  HistoryOutlined
} from "@ant-design/icons";
import CourseDashboard from "./coursedashboard.js";
import Mailbox from "./mailbox.js";
import CourseHistory from "./history.js";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class CourseManagementView extends React.Component {
  state = {
    collapsed: false,
    content: "1",
    theme: "dark",
    color: "#003366"
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  switchToDashboard = () => {
    this.setState({
      content: "1"
    });
    console.log(this.state.content);
  };

  switchToHistory = () => {
    this.setState({
      content: "2"
    });
  };

  switchToMessage = () => {
    this.setState({
      content: "3"
    });
  };

  changeTheme = () => {
    if(this.state.theme == "light"){
      this.setState({
        theme: "dark",
        color: "#003366"
      });
    } else {
      this.setState({
        theme: "light",
        color: "white"
      });
    }
  }

  logout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("access_token");
    this.props.history.push('/login');
  }

  renderSwitch(param) {
    switch (param) {
      case "1":
        return <CourseDashboard />;
      case "2":
        return <CourseHistory />;
      case "3":
        return <Mailbox />;
      default:
    }
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu theme={this.state.theme} mode="inline" defaultSelectedKeys={["1"]} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item
              key="1"
              icon={<DashboardOutlined />}
              onClick={this.switchToDashboard}
            >
              Course Dashboard
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<HistoryOutlined />}
              onClick={this.switchToHistory}
            >
              History
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={
                <Badge count={1} dot>
                  {" "}
                  <MessageOutlined />
                </Badge>
              }
              onClick={this.switchToMessage}
            >
              Message
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={
                  <DashboardOutlined />
              }
              onClick={this.changeTheme}
            >
              Change Theme
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="1" onClick={this.logout}>Log out</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              backgroundColor: this.state.color
            }}
          >
            {this.renderSwitch(this.state.content)}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default CourseManagementView;
