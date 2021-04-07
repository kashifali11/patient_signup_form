import React from "react";
import { Col, Form, Checkbox } from "antd";
export default function InsuranceAttestaion() {
  return (
    <>
      <Col span={24} xs={24} sm={12}>
        <Form.Item
          name={["insuranceDetails", "attestaion"]}
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Please click checkbox for attestation!",
            },
          ]}
          wrapperCol={{offset:2}}
        >
          <Checkbox>Insurance Attestaion</Checkbox>
        </Form.Item>
      </Col>
    </>
  );
}
