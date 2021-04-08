import React from "react";
import { Col, Form, Checkbox } from "antd";
export default function InsuranceAttestaion({insuranceAttestationName}) {
  return (
    <>
      <Col span={24} xs={24} sm={12}>
        <Form.Item
          name={insuranceAttestationName}
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Please click checkbox for attestation!",
            },
          ]}
          wrapperCol={{offset:2}}
        >
          <Checkbox>Insurance Attestation</Checkbox>
        </Form.Item>
      </Col>
    </>
  );
}
