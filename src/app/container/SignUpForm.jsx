import Title from "antd/lib/typography/Title";
import React from "react";
import UserInformationForm from "../components/userInformationForm/UserInformationForm.jsx";
import { v4 as uuidv4 } from "uuid";
export default function Home() {
  const onSubmitionOfForm = (values) => {
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
    const body = fieldsValues;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    };
    fetch("https://enj1gr28datbc.x.pipedream.net/", options);
  };
  return (
    <div style={{ margin: 30 }}>
      <Title>Patient Signup Form</Title>
      <UserInformationForm onFinish={onSubmitionOfForm} />
    </div>
  );
}
