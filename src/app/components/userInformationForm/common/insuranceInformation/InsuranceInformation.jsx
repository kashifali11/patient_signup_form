import React from "react";
import { Col, Form, Select, Upload, Button, Input } from "antd";
const insuranceCompanies = [
  { label: "United Healthcare", value: "United Healthcare" },
  { label: "Wellpoint", value: "Wellpoint" },
  { label: "Aetna", value: "Aetna" },
  { label: "CIGNA Corp.", value: "CIGNA Corp." },
  { label: "Humana", value: "Humana" },
  { label: "Centene Corp.", value: "Centene Corp." },
  { label: "Health Net, Inc.", value: "Health Net, Inc." },
  { label: "WellCare Health Plans", value: "WellCare Health Plans" },
  { label: "Healthspring", value: "Healthspring" },
  { label: "Molina Healthcare", value: "Molina Healthcare" },
];
export default function InsuranceInformation({
  insuranceSnapshotUploadAttributes,
  insuranceCompanySelectAttributes,
  insuranceNumberInputAttributes,
}) {

  return (
    <>
      <Col span={8} xs={24} sm={22} lg={18} xl={14}>
        <Form.Item {...insuranceSnapshotUploadAttributes}>
          <Upload>
            <Button>Upload</Button>
          </Upload>
        </Form.Item>
      </Col>
      <Col span={8} xs={24} sm={22} lg={18} xl={14}>
        <Form.Item {...insuranceCompanySelectAttributes}>
          <Select  options={insuranceCompanies}></Select>
        </Form.Item>
      </Col>
      <Col span={8} xs={24} sm={22} lg={18} xl={14}>
        <Form.Item {...insuranceNumberInputAttributes}>
          <Input />
        </Form.Item>
      </Col>
    </>
  );
}
