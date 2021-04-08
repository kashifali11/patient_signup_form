import Title from 'antd/lib/typography/Title'
import React from 'react'
import PersonalInformation from "../components/userInformationForm/personalInformation/PersonalInformation.jsx";
import InsuranceDetails from "../components/userInformationForm/insuranceDetails/InsuranceDetails.jsx";
import { v4 as uuidv4 } from "uuid";
import FamilyDetails from "../components/userInformationForm/familyDetails/FamilyDetailsList.jsx";
import { layout } from "../utils/userInformationFormUtils.js";
import { Form, Button } from "antd";
export default function Home() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const fieldsValues = {
      ...values,
      uuid: uuidv4(),
      personalInfo: {
        ...values.personalInfo,
        dob: values.personalInfo.dob.format("YYYY-MM-DD"),
        snapshotOfId: values.personalInfo.snapshotOfId.fileList,
      },
      familyDetails: values.familyDetails.map((detail) => {
        if (detail.insuranceSnapshot !== undefined) {
          detail.insuranceSnapshot = detail.insuranceSnapshot.fileList;
        }
        detail.dob = detail.dob.format("YYYY-MM-DD");
        return detail;
      }),
    };
    console.log(fieldsValues);
  };
    return (
        <div style={{margin:30}}>
          <Title>Patient Signup Form</Title>
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
        </div>
    )
}
