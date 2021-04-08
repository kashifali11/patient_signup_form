export const personalInfoInputAttributes = [
  {
    name: ["personalInfo", "firstName"],
    label: "First Name",
    rules: [{ required: true, message: "Please input your first name!" }],
  },
  {
    name: ["personalInfo", "lastName"],
    label: "Last Name",
    rules: [{ required: true, message: "Please input your last name!" }],
  },
  {
    name: ["personalInfo", "phoneNo"],
    label: "Phone Number",
    rules: [{ required: true, message: "Please input your phone number!" }],
  },
  {
    name: ["personalInfo", "email"],
    label: "Email",
    rules: [
      { required: true, message: "Please input your email!" },
      { type: "email", message: "Please input valid email!" },
    ],
  },
];
export const addressInfoInputAttributes = [
  {
    name: ["personalInfo", "address"],
    label: "Address",
    rules: [{ required: true, message: "Please input your address!" }],
  },
  {
    name: ["personalInfo", "city"],
    label: "City",
    rules: [{ required: true, message: "Please input your city name!" }],
  },
  {
    name: ["personalInfo", "state"],
    label: "State",
    rules: [{ required: true, message: "Please input your state name!" }],
  },
  {
    name: ["personalInfo", "zipCode"],
    label: "Zip Code",
    rules: [{ required: true, message: "Please input your zip code!" }],
  },
];
