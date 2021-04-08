export const getInputAttributesForFamilyMemberDetails = (field) => {
  const { fieldKey, name } = field;
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
  return memberDetailsInputAttributes;
};

export const getInsuranceSnapshotUploadAttributes = (field) => {
  const { fieldKey, name } = field;
  const insuranceSnapshotUploadAttributes = {
    name: [name, "insuranceSnapshot"],
    fieldKey: [fieldKey, "firstName"],
    label: "Insurance Document Snapshots",
    rules: [{ required: true, message: "Please upload insurance snapshots!" }],
  };
  return insuranceSnapshotUploadAttributes;
};
export const getInsuranceCompanySelectAttributes = (field) => {
  const { fieldKey, name } = field;
  const insuranceCompanySelectAttributes = {
    name: [name, "insuranceCompany"],
    fieldKey: [fieldKey, "firstName"],
    label: "Insurance Company",
    rules: [{ required: true, message: "Please select insurance company!" }],
  };
  return insuranceCompanySelectAttributes;
};
export const getInsuranceNumberInputAttributes = (field) => {
  const { fieldKey, name } = field;
  const insuranceNumberInputAttributes = {
    name: [name, "insuranceNumber"],
    fieldKey: [fieldKey, "firstName"],
    label: "Insurance Number",
    rules: [{ required: true, message: "Please enter your insurance number!" }],
  };
  return insuranceNumberInputAttributes;
};
