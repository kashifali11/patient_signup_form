import { Typography, Form, Select, Row, Col } from "antd";
import React, { useState } from "react";
import InsuranceAttestaion from "../common/insuranceAttestation/InsuranceAttestation.jsx";
import InsuranceInformation from "../common/insuranceInformation/InsuranceInformation.jsx";
import {
  insuranceCompanySelectAttributes,
  insuranceNumberInputAttributes,
  insuranceOptions,
  insuranceSnapshotUploadAttributes,
} from "../../../utils/insuranceDetailsUtils";

export default function InsuranceDetails({ form }) {
  const [haveInsurance, setHaveInsurance] = useState("");
  const handleHaveInsuranceChange = (value) => {
    setHaveInsurance(value);
    form.setFieldsValue({ familyDetails: [] });
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
            <Select
              options={insuranceOptions}
              onChange={handleHaveInsuranceChange}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
        {haveInsurance === "yes" ? (
          <InsuranceInformation
            insuranceSnapshotUploadAttributes={
              insuranceSnapshotUploadAttributes
            }
            insuranceCompanySelectAttributes={insuranceCompanySelectAttributes}
            insuranceNumberInputAttributes={insuranceNumberInputAttributes}
          />
        ) : haveInsurance === "no" ? (
          <InsuranceAttestaion insuranceAttestationName={["insuranceDetails", "attestaion"]}/>
        ) : (
          <></>
        )}
      </Row>
    </>
  );
}
