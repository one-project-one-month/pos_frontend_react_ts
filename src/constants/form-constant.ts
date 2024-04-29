import { Inputs } from "@/type/formSchema";

export type TFromConst = {
  name: keyof Inputs;
  placeholder: string;
  isSelect?: boolean;
  selectValue?: {
    value: string;
    placeholder: string;
  }[];
  type: string;
  errorMessage?: string;
  validation?: any;
};

export const shopFormConst: TFromConst[] = [
  {
    name: "shopCode",
    placeholder: "Shop Code",
    type: "text",
  },
  {
    name: "shopName",
    placeholder: "Shop Name",
    type: "text",
  },
  {
    name: "mobileNo",
    placeholder: "Mobile No",
    type: "text",
  },
  {
    name: "address",
    placeholder: "Address",
    type: "text",
  },
];

export const staffFormConst: TFromConst[] = [
  {
    name: "staffCode",
    placeholder: "Staff Code",
    type: "text",
    errorMessage: "StaffCode is required",
    validation: { required: true },
  },
  {
    name: "dateOfBirth",
    placeholder: "Date Of Birth",
    type: "date",
    errorMessage: "Date Of Birth is required",
    validation: { required: true },
  },
  {
    name: "staffName",
    placeholder: "Staff Name",
    type: "text",
    errorMessage: "StaffName at least five characters",
    validation: { required: true, minLength: 5 },
  },
  {
    name: "mobileNo",
    placeholder: "Mobile Number",
    type: "text",
    errorMessage: "Mobile Number is required",
    validation: { required: true },
  },
  {
    name: "address",
    placeholder: "Address",
    type: "text",
    errorMessage: "Address is required",
    validation: { required: true },
  },
  {
    name: "gender",
    placeholder: "Gender",
    selectValue: [
      {
        value: "",
        placeholder: "Gender",
      },
      {
        value: "female",
        placeholder: "Female",
      },
      {
        value: "male",
        placeholder: "Male",
      },
      {
        value: "other",
        placeholder: "Other",
      },
    ],
    type: "select",
    errorMessage: "Gender is required",
    validation: { required: true },
  },
  {
    name: "position",
    placeholder: "Position",
    selectValue: [
      {
        value: "",
        placeholder: "Position",
      },
      {
        value: "cashier",
        placeholder: "Cashier",
      },
      {
        value: "admin",
        placeholder: "Admin",
      },
    ],
    type: "select",
    errorMessage: "Position is required",
    validation: { required: true },
  },
  {
    name: "password",
    placeholder: "Password",
    type: "text",
    errorMessage: "Password is required",
    validation: { required: true },
  },
];

export const customerFormConst: TFromConst[] = [
  {
    name: "customerCode",
    placeholder: "Customer Code",
    type: "text",
    errorMessage: "Customer Code is required",
    validation: { required: true },
  },
  {
    name: "customerDOB",
    placeholder: "Date Of Birth",
    type: "date",
    errorMessage: "Date Of Birth is required",
    validation: { required: true },
  },
  {
    name: "customerName",
    placeholder: "Customer Name",
    type: "text",
    errorMessage: "Customer Name is required",
    validation: { required: true },
  },
  {
    name: "customerMobilNo",
    placeholder: "Mobile Number",
    type: "text",
    errorMessage: "Mobile Number is required",
    validation: { required: true },
  },

  {
    name: "customerGender",
    placeholder: "Gender",
    type: "select",
    selectValue: [
      {
        value: "",
        placeholder: "Gender",
      },
      {
        value: "female",
        placeholder: "Female",
      },
      {
        value: "male",
        placeholder: "Male",
      },
      {
        value: "other",
        placeholder: "Other",
      },
    ],
    errorMessage: "Gender is required",
    validation: { required: true },
  },
  {
    name: "cusotmerStateCode",
    placeholder: "State Code",
    type: "number",
    errorMessage: "State Code is required",
    validation: { required: true },
  },
  {
    name: "customerTownShipCode",
    placeholder: "Township Code",
    type: "number",
    errorMessage: "Township Code is required",
    validation: { required: true },
  },
];

export const productFormConst: TFromConst[] = [
  {
    name: "productCode",
    placeholder: "Product Code",
    type: "text",
    errorMessage: "Product Code is required",
    validation: { required: true },
  },
  {
    name: "productName",
    placeholder: "Product Name",
    type: "text",
    errorMessage: "Product Name is required",
    validation: { required: true },
  },
  {
    name: "price",
    placeholder: "Product Price",
    type: "number",
    errorMessage: "Product Price is required",
    validation: { required: true },
  },
  {
    name: "categoryCode",
    placeholder: "Product Category Code",
    type: "text",
    errorMessage: "Product Category Code is required",
    validation: { required: true },
  },
];

export const categoryFormConst: TFromConst[] = [
  {
    name: "productCategoryCode",
    placeholder: "Product CategoryCode",
    type: "text",
    errorMessage: "Product Category Code is required",
    validation: { required: true },
  },
  {
    name: "productCategoryName",
    placeholder: "Product Category Name",
    type: "text",
    errorMessage: "Product Category Name is required",
    validation: { required: true },
  },
];
