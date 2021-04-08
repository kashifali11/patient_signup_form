import { Form, Col, DatePicker, Select } from "antd";
import React from "react";
import InputTextFieldList from "../../../common/inputTextFieldList/InputTextFieldList.jsx";
import { getInputAttributesForFamilyMemberDetails } from "../../../utils/familyMemberDetailsUtils.js";

const { Option } = Select;
export default function FamilyMembersDetails({ field, form }) {
  const memberDetailsInputAttributes = getInputAttributesForFamilyMemberDetails(
    field
  );
  const { fieldKey, name } = field;
  const handleInsuranceStatusChange = (value) => {
    console.log(value);
  };
  return (
    <>
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
    </>
  );
}
