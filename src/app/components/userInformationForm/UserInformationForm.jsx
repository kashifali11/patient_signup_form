import Form from "antd/lib/form/Form";
import React from "react";
import PersonalInformation from "./personalInformation/PersonalInformation.jsx";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
export default function UserInformationForm() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form  name="patient_signup_form" onFinish={onFinish}>
      <PersonalInformation />
    </Form>
  );
}
