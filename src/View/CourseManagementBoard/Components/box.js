import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";

function CourseBox(props) {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={12}>
          <Card
            title="Schedule"
            bordered={true}
            style={{ backgroundColor: "#188fffd0" }}
          >
            You have 5 lectures scheduled
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Achievement"
            bordered={true}
            style={{ backgroundColor: "#f1855ad0" }}
          >
            You have completed 11 Lectures
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CourseBox;
