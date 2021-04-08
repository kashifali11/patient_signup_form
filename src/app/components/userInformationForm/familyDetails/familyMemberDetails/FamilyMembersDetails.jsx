import { Form, Col, DatePicker, Select, Typography } from "antd";
import React, { useState } from "react";
import InputTextFieldList from "../../../common/inputTextFieldList/InputTextFieldList.jsx";
import InsuranceInformation from "../../insuranceInformation/InsuranceInformation.jsx";
import InsuranceAttestation from "../../insuranceAttestation/InsuranceAttestation.jsx";
import { v4 as uuidv4 } from "uuid";
const { Option } = Select;
export default function FamilyMembersDetails({ field, form }) {
  const [insuranceStatus, setInsuranceStatus] = useState("");
  const { fieldKey, name } = field;
  const memberDetailsInputAttributes = [
    {
      name: [name, "firstName"],
      label: "First Name",
      fieldKey: [fieldKey, "firstName"],
      rules: [
        {
          required: true,
          message: "Please input first name of family member!",
        },
      ],
    },
    {
      name: [name, "lastName"],
      label: "Last Name",
      fieldKey: [fieldKey, "lastName"],
      rules: [
        { required: true, message: "Please input last name of family member!" },
      ],
    },
  ];
  const insuranceSnapshotUploadAttributes = {
    name: [name, "insuranceSnapshot"],
    fieldKey: [fieldKey, "firstName"],
    label: "Insurance Document Snapshots",
    rules: [{ required: true, message: "Please upload insurance snapshots!" }],
  };
  const insuranceCompanySelectAttributes = {
    name: [name, "insuranceCompany"],
    fieldKey: [fieldKey, "firstName"],
    label: "Insurance Company",
    rules: [{ required: true, message: "Please select insurance company!" }],
  };
  const insuranceNumberInputAttributes = {
    name: [name, "insuranceNumber"],
    fieldKey: [fieldKey, "firstName"],
    label: "Insurance Number",
    rules: [{ required: true, message: "Please enter your insurance number!" }],
  };
  const handleInsuranceStatusChange = (value) => {
    setInsuranceStatus(value);
  };
  return (
    <>
      <Form.Item initialValue={uuidv4()} name={[name, "uuid"]} />
      <Col xs={24}>
        <Typography.Title level={5}>Family Member's Details</Typography.Title>
      </Col>
      <InputTextFieldList inputAttributes={memberDetailsInputAttributes} />
      <Col className="gutter-row" span={6} xs={24} xl={8}>
        <Form.Item
          label="Dat of birth"
          name={[name, "dob"]}
          fieldKey={[fieldKey, "lastName"]}
          rules={[
            {
              required: true,
              message: "Please input last name of family member!",
            },
          ]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
      </Col>
      <Col className="gutter-row" span={12} xs={24} xl={12}>
        <Form.Item
          label="Insurance Status"
          name={[name, "insuranceStatus"]}
          fieldKey={[fieldKey, "insuranceStatus"]}
          rules={[
            { required: true, message: "Please select insurance status!" },
          ]}
        >
          <Select onChange={handleInsuranceStatusChange}>
            {form.getFieldsValue().insuranceDetails.insurance === "yes" ? (
              <Option value="same">Same</Option>
            ) : (
              <Option disabled>Same</Option>
            )}
            <Option value="other">Other</Option>
            <Option value="none">None</Option>
          </Select>
        </Form.Item>
      </Col>
      {insuranceStatus === "other" ? (
        <InsuranceInformation
          insuranceSnapshotUploadAttributes={insuranceSnapshotUploadAttributes}
          insuranceCompanySelectAttributes={insuranceCompanySelectAttributes}
          insuranceNumberInputAttributes={insuranceNumberInputAttributes}
        />
      ) : insuranceStatus === "none" ? (
        <InsuranceAttestation
          insuranceAttestationName={[name, "attestation"]}
        />
      ) : (
        <></>
      )}
    </>
  );
}
