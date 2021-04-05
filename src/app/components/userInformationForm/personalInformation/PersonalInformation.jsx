import { Form, Row, Col, DatePicker } from "antd";
import React from "react";
import InputTextFieldList from "../../common/inputTextFieldList/InputTextFieldList.jsx";
const personalInfoInput = [
  {
    name: ["personalInfo", "firstName"],
    label: "First Name",
    rules: [{ required: true, message: "Please input your first name!" }],
  },
  {
    name: ["personalInfo", "lastName"],
    label: "Last Name",
    rules: [{ required: true, message: "Please input your last name!" }],
  },
  {
    name: ["personalInfo", "phoneNo"],
    label: "Phone Number",
    rules: [{ required: true, message: "Please input your phone number!" }],
  },
  {
    name: ["personalInfo", "email"],
    label: "Email",
    rules: [
      { required: true, message: "Please input your email!" },
      { type: "email", message: "Please input valid email!" },
    ],
  },
];

export default function PersonalInformation() {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <InputTextFieldList inputAttributes={personalInfoInput} />
        <Col className="gutter-row" span={6} xs={24} xl={8}>
          <Form.Item
            label="Date of Birth"
            name={["personalInfo", "dob"]}
            rules={[
              { required: true, message: "Please select your date of birth!" },
            ]}
          >
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}
