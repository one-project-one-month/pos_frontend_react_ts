export interface TProduct {
  productId: string;
  productCode: string;
  productName: string;
  price: number;
  categoryCode: string;
  category: TProductCategory,
}

export interface TCustomer {
  customerId: string;
  customerCode: string;
  customerName: string;
  customerMobileNo: number;
  customerDOB: string;
  customerGender: string;
  customerStateCode: number;
  customerTownShipCode: number;
}

export interface TProductCategory {
  productCategoryId: string;
  productCategoryCode: string;
  productCategoryName: string;
}

export interface TStaff {
  staffId: string;
  staffCode: string;
  staffName: string;
  password: string;
  dateOfBirth: Date;
  mobileNo: string;
  address: string;
  gender: "male" | "female" | "other";
  position: "cashier" | "admin";
}

export interface TShop {
  id: string;
  shopCode: string;
  shopName: string;
  mobileNo: string;
  address: string;
}

export interface TJSONServerPaginationResponse<T> {
  data: T;
  first: 1;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
}


export interface TApiResponse<T> {
  data: {
    [key: string]: T[];
  };
  message: string;
  result: number;
}


export interface TInvoice {
  saleInvoiceId: string;
  dateTime: string;
  voucherNo: string;
  totalAmount: number;
  discount: number;
  staffCode: string;
  tax: number;
  paymentType: string;
  paymentAmount: number;
  receiveAmount: number;
  change: number;
  customerCode: string;
  invoiceDetail: TInvoiceDetail
}

export interface TInvoiceDetail {
  saleInvoiceDetailsId: string,
  voucherNo: string,
  productCode: string,
  quantity: number,
  price: number,
  amount: number
}

export interface TProductInCart {
  product: TProduct;
  count: number;
}

export interface TInvoiceFormValues {
  voucherNo: string;
  customers: string;
  staffs: string;
  paymentType: string;
  paymentAmount: number;
  receiveAmount: number;
}

export interface TInvoiceItemProps {
  label: string;
  value: string | number;
}

