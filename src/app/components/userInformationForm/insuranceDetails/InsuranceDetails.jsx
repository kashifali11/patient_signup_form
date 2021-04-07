import { Typography, Form, Select, Row, Col } from "antd";
import React, { useState } from "react";
import InsuranceAttestaion from "./insuranceAttestation/InsuranceAttestaion.jsx";
import InsuranceInformation from "./insuranceInformation/InsuranceInformation.jsx";
const insurance = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];
export default function InsuranceDetails({ form }) {
  const [haveInsurance, setHaveInsurance] = useState("");
  const handleHaveInsuranceChange = (value) => {
    setHaveInsurance(value);
    form.setFieldsValue({familyDetails: []})
  };
  return (
    <>
      <Typography.Title level={4}>Insurance Details</Typography.Title>
      <Row gutter={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
        <Col className="gutter-row" span={8} xs={24} xl={14}>
          <Form.Item
            wrapperCol={{ span: 12 }}
            label="Do you have Insurance?"
            name={["insuranceDetails", "insurance"]}
            rules={[
              {
                required: true,
                message: "Please specify if you have insurance or not!",
              },
            ]}
          >
            <Select options={insurance} onChange={handleHaveInsuranceChange} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
        {haveInsurance === "yes" ? (
          <InsuranceInformation />
        ) : haveInsurance === "no" ? (
          <InsuranceAttestaion />
        ) : (
          <></>
        )}
      </Row>
    </>
  );
}
