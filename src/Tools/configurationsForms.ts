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

export const foodFormConfig = {
  nombre: {
    label: "Name",
    placeholder: "Enter the name of the food",
    isRequired: true,
  },
  precio: {
    label: "Price",
    placeholder: "Enter the price of the food",
    type: "number",
    isRequired: true,
  },
  tipo: {
    label: "Type",
    placeholder: "Enter the type of the food (drink or food)",
    isRequired: true,
  },
  categoria: {
    label: "Category",
    placeholder: "Enter the category of the food",
    isRequired: true,
  },
  urlimg: {
    label: "Image URL",
    placeholder: "Enter the URL of the food's image",
    type: "url",
    isRequired: true,
  }
}
