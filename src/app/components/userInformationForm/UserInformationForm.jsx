import { Form, Button, Typography } from "antd";
import React, { useEffect } from "react";
import PersonalInformation from "./personalInformation/PersonalInformation.jsx";
import { v4 as uuidv4 } from "uuid";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

export default function UserInformationForm() {
  const [form] = Form.useForm();
  useEffect(()=>{
    form.setFieldsValue({id: uuidv4()});
  },[]);
  const onFinish = (values) => {
    const fieldsValues = {...values,
      "uuid": uuidv4(),
      "personalInfo": {
        ...values.personalInfo,
        "dob": values.personalInfo.dob.format("YYYY-MM-DD")
      }
    } 
    console.log(fieldsValues);
  };
  return (
    <Form form={form} {...layout} name="patient_signup_form" onFinish={onFinish}>
      <Typography.Title level={4}>Personal Information</Typography.Title>
      <PersonalInformation />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
