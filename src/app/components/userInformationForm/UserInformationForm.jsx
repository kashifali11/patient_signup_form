import {Form,Button} from "antd";
import React from "react";
import PersonalInformation from "./personalInformation/PersonalInformation.jsx";

export default function UserInformationForm() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form name="patient_signup_form" onFinish={onFinish}>
      <PersonalInformation />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
