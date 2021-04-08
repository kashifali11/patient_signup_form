export const insuranceOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];
export const insuranceSnapshotUploadAttributes = {
  name: ["insuranceDetails", "insuranceSnapshot"],
  label: "Insurance Document Snapshots",
  rules: [{ required: true, message: "Please upload insurance snapshots!" }],
};
export const insuranceCompanySelectAttributes = {
  name: ["insuranceDetails", "insuranceCompany"],
  label: "Insurance Company",
  rules: [{ required: true, message: "Please select insurance company!" }],
};
export const insuranceNumberInputAttributes = {
  name: ["insuranceDetails", "insuranceNumber"],
  label: "Insurance Number",
  rules: [{ required: true, message: "Please enter your insurance number!" }],
};
