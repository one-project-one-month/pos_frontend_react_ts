export type TFromConst = {
  name: string;
  placeholder: string;
  isSelect?: boolean;
  selectValue?: {
    value: string;
    placeholder: string;
  }[];
  type: string;
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
    type: "number",
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
  },
  {
    name: "staffName",
    placeholder: "Staff Name",
    type: "text",
  },
  {
    name: "dateOfBirth",
    placeholder: "Date Of Birth",
    type: "date",
  },
  {
    name: "mobileNo",
    placeholder: "Mobile Number",
    type: "text",
  },
  {
    name: "address",
    placeholder: "Address",
    type: "text",
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
  },
];

export const customerFormConst: TFromConst[] = [
  {
    name: "customerCode",
    placeholder: "Customer Code",
    type: "text",
  },
  {
    name: "customerName",
    placeholder: "CustomerName",
    type: "text",
  },
  {
    name: "customerMobilNo",
    placeholder: "Mobile Number",
    type: "text",
  },
  {
    name: "customerDOB",
    placeholder: "Date Of Birth",
    type: "date",
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
  },
  {
    name: "cusotmerStateCode",
    placeholder: "State Code",
    type: "number",
  },
  {
    name: "customerTownShipCode",
    placeholder: "Township Code",
    type: "number",
  },
];

export const productFormConst: TFromConst[] = [
  {
    name: "productCode",
    placeholder: "Product Code",
    type: "text",
  },
  {
    name: "productName",
    placeholder: "Product Name",
    type: "text",
  },
  {
    name: "price",
    placeholder: "Product Price",
    type: "number",
  },
  {
    name: "productCategoryCode",
    placeholder: "Product CategoryCode",
    type: "text",
  },
];

export const categoryFormConst: TFromConst[] = [
  {
    name: "productCategoryCode",
    placeholder: "Product CategoryCode",
    type: "text",
  },
  {
    name: "productCategoryName",
    placeholder: "Product Category Name",
    type: "text",
  },
];
