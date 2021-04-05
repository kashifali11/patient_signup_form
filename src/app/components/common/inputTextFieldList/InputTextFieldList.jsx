import React from "react";
import { Col, Form, Input } from "antd";
export default function InputTextFieldList({ inputAttributes }) {
  return inputAttributes.map((inputAttribute) => {
    return (
      <Col key={inputAttribute.name} className="gutter-row" span={6} xs={24} xl={8}>
        <Form.Item
          name={inputAttribute.name}
          label={inputAttribute.label}
          rules={inputAttribute.rules}
        >
          <Input />
        </Form.Item>
      </Col>
    );
  });
}
