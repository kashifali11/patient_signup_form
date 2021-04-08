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
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Please click checkbox for attestation")),
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
