import { Inputs } from "@/type/formSchema";

export type TFromConst = {
  name: keyof Inputs;
  placeholder: string;
  isSelect?: boolean;
  selectValue?: string[];
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
    selectValue: ["Male", "Female", "Other"],
    type: "select",
  },
  {
    name: "position",
    placeholder: "Position",
    selectValue: ["Manager", "Sales Associate", "Storekeeper"],
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
    name: "mobileNo",
    placeholder: "Mobile Number",
    type: "text",
  },
  {
    name: "dateOfBirth",
    placeholder: "Date Of Birth",
    type: "date",
  },
  {
    name: "gender",
    placeholder: "Gender",
    type: "select",
    selectValue: ["Male", "Female", "Other"],
  },
  {
    name: "stateCode",
    placeholder: "State Code",
    type: "text",
  },
  {
    name: "townshipCode",
    placeholder: "Township Code",
    type: "text",
  },
];
