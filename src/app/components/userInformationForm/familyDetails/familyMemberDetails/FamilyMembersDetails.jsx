import { Form } from "antd";
import React from "react";
import InputTextFieldList from "../../../common/inputTextFieldList/InputTextFieldList.jsx";

export default function FamilyMembersDetails({ field }) {
  const { fieldKey, name, isListedField } = field;
  const memberDetailsInputAttributes = [
    {
      name: [name, "firstName"],
      label: "First Name",
      fieldKey: [fieldKey, "firstName"],
      rules: [
        {
          required: true,
          message: "Please input first name of family member!",
        },
      ],
    },
    {
      name: [name, "lastName"],
      label: "Last Name",
      fieldKey: [fieldKey, "lastName"],
      rules: [
        { required: true, message: "Please input last name of family member!" },
      ],
    },
  ];
  return (
    <>
      <InputTextFieldList inputAttributes={memberDetailsInputAttributes} />
    </>
  );
}
