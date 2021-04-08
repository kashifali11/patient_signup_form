import { Form, Button } from "antd";
import React from "react";
import PersonalInformation from "./personalInformation/PersonalInformation.jsx";
import InsuranceDetails from "./insuranceDetails/InsuranceDetails.jsx";
import { v4 as uuidv4 } from "uuid";
import FamilyDetails from "./familyDetails/FamilyDetailsList.jsx";
export const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

export default function UserInformationForm({onFinish}) {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      {...layout}
      name="patient_signup_form"
      onFinish={onFinish}
    >
      <PersonalInformation />
      <InsuranceDetails form={form} />
      <FamilyDetails form={form} />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
