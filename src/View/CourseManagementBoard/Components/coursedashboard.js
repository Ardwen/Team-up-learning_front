import React from "react";
import "antd/dist/antd.css";
import CourseTable from "./table.js";
import CourseBox from "./box.js";
import FriendsInvite from "./Invite.js";
import { Modal, Button, Form, Input, DatePicker, TimePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { RangePicker } = TimePicker;

class CourseDashboard extends React.Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false,
    title: "",
    date: "",
    time: "",
    frineds: []
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    let dataToSubmit = {};
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  onTitleChange = (event) => {
    this.setState({
      title: event.currentTarget.value
    });
  };

  onDateChange = (event) => {
    this.setState({
      date: event.dateString
    });
  };

  onTimeChange = (event) => {
    this.setState({
      time: event.timeString
    });
  };

  render() {
    return (
      <div>
        <CourseBox />
        <br />
        <Button
          type="dashed"
          onClick={() => {
            this.showModal();
          }}
          style={{ width: "60%" }}
        >
          <PlusOutlined /> Add Course
        </Button>
        <Modal
          title="Schdule new course"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form
            labelCol={{
              span: 6
            }}
            wrapperCol={{
              span: 14
            }}
            layout="horizontal"
          >
            <Form.Item label="CourseName">
              <Input onChange={this.onTitleChange} value={this.state.title} />
            </Form.Item>
            <Form.Item label="Select Date">
              <DatePicker
                onChange={this.onDateChange}
                value={this.state.date}
              />
            </Form.Item>
            <Form.Item label="Select Time">
              <RangePicker
                onChange={this.onTimeChange}
                value={this.state.time}
              />
            </Form.Item>
            <Form.Item label="Invite Friends">
              <FriendsInvite />
            </Form.Item>
          </Form>
        </Modal>
        <CourseTable />
      </div>
    );
  }
}

export default CourseDashboard;
