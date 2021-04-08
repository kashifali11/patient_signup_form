import { Form, Row, Col, DatePicker, Select, Upload, Button, Typography } from "antd";
import React from "react";
import InputTextFieldList from "../../common/inputTextFieldList/InputTextFieldList.jsx";
import { addressInfoInputAttributes, personalInfoInputAttributes } from "../../../utils/personalInformationUtils";

const { Option } = Select;
export default function PersonalInformation() {
  return (
    <>
    <Typography.Title level={4}>Personal Information</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <InputTextFieldList inputAttributes={personalInfoInputAttributes} />
        <Col className="gutter-row" span={6} xs={24} xl={8}>
          <Form.Item
            label="Date of Birth"
            name={["personalInfo", "dob"]}
            rules={[
              { required: true, message: "Please select your date of birth!" },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} xs={24} xl={8}>
          <Form.Item
            label="Gender"
            name={["personalInfo", "gender"]}
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <Select style={{ width: "100%" }}>
              <Option value="None">None</Option>
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
        </Col>
        <InputTextFieldList inputAttributes={addressInfoInputAttributes} />
        <Col className="gutter-row" span={6} xs={24} xl={8}>
          <Form.Item
            name={["personalInfo", "snapshotOfId"]}
            label="Id Snapshot"
            rules={[
              { required: true, message: "Please upload snapshot of your Id!" },
            ]}
          >
            <Upload style={{ width: "100%" }}>
              <Button style={{ width: "100%" }}>UPLOAD</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}
