import { Typography, Form, Select, Row, Col } from "antd";
import React from "react";
const haveInsurance = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];
export default function InsuranceDetails() {
  return (
    <>
      <Typography.Title level={4}>Insurance Details</Typography.Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} xs={24} sm={22} lg={18} xl={14}>
          <Form.Item
            label="Do you have any Insurance?"
            name={["insuranceDetails", "haveInsurance"]}
            rules={[
              { required: true, message: "Please specify if you have insurance or not!" },
            ]}
          >
            <Select options={haveInsurance} />
          </Form.Item>
        </Col>
      </Row>
      
    </>
  );
}
