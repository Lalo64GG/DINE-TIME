export const waiterFormConfig = {
  nombre: { label: "Name", placeholder: "Enter your name", isRequired: true },
  apellido: {
    label: "Last Name",
    placeholder: "Enter your last name",
    isRequired: true,
  },
  email: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    isRequired: true,
  },
  password: {
    label: "Password",
    placeholder: "Insert the Password",
    type: "password",
    isRequired: true,
  },
  position: {
    label: "Position",
    placeholder: "Enter your position",
    isRequired: true,
  },
  phone: {
    label: "Phone",
    placeholder: "Enter your phone number",
    type: "tel",
    isRequired: true,
  },
  photo: {
    label: "Photo URL",
    placeholder: "Enter the URL of your photo",
    type: "url",
    isRequired: true,
  },
};

export const tablesFormConfig = {
  numberOfTable: {
    label: "Number of Table",
    placeholder: "Enter the number of table",
    isRequired: "true",
  },
  capacity: {
    label: "Capacity",
    placeholder: "Enter the capacity of the table",
    isRequired: true,
  },
};
