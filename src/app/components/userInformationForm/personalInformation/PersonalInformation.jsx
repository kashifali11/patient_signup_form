import { Form, Input, Row, Col } from "antd";
import React from "react";

export default function PersonalInformation() {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <Form.Item
            className="gutter-row"
            span={6}
            name={["personalInfo", "phone_no"]}
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            className="gutter-row"
            span={6}
            name={["personalInfo", "email"]}
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please input valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}
