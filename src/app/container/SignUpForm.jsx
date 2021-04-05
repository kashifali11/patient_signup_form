import Title from 'antd/lib/typography/Title'
import React from 'react'
import UserInformationForm from "../components/userInformationForm/UserInformationForm.jsx";
export default function Home() {
    return (
        <>
          <Title>Patient Signup Form</Title>
          <UserInformationForm />
        </>
    )
}