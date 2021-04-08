import Title from 'antd/lib/typography/Title'
import React from 'react'
import UserInformationForm from "../components/userInformationForm/UserInformationForm.jsx";
export default function Home() {
  const onSubmitionOfForm = (value) =>{
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
  }
    return (
        <div style={{margin:30}}>
          <Title>Patient Signup Form</Title>
          <UserInformationForm onFinish={onSubmitionOfForm} />
        </div>
    )
}

