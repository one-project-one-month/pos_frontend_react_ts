import { Inputs } from "@/type/formSchema";

export const shopFormConst: { name: keyof Inputs; placeholder: string }[] = [
  {
    name: "shopCode",
    placeholder: "Shop Code",
  },
  {
    name: "shopName",
    placeholder: "Shop Name",
  },
  {
    name: "mobileNo",
    placeholder: "Mobile No",
  },
  {
    name: "address",
    placeholder: "Address",
  },
];

export const staffFormConst: { name: keyof Inputs; placeholder: string }[] = [
  {
    name: "staffCode",
    placeholder: "Staff Code",
  },
  {
    name: "staffName",
    placeholder: "Staff Name",
  },
  {
    name: "dateOfBirth",
    placeholder: "Date Of Birth",
  },
  {
    name: "mobileNo",
    placeholder: "Mobile Number",
  },
  {
    name: "address",
    placeholder: "Address",
  },
  {
    name: "gender",
    placeholder: "Gender",
  },
  {
    name: "position",
    placeholder: "Position",
  },
];

export const customerFormConst: { name: keyof Inputs; placeholder: string }[] =
  [
    {
      name: "customerCode",
      placeholder: "Customer Code",
    },
    {
      name: "customerName",
      placeholder: "CustomerName",
    },
    {
      name: "mobileNo",
      placeholder: "Mobile Number",
    },
    {
      name: "dateOfBirth",
      placeholder: "Date Of Birth",
    },
    {
      name: "gender",
      placeholder: "Gender",
    },
    {
      name: "stateCode",
      placeholder: "State Code",
    },
    {
      name: "townshipCode",
      placeholder: "Township Code",
    },
  ];
