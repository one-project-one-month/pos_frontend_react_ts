export interface TProduct {
  id: number;
  productCode: string;
  productName: string;
  price: number;
  productCategoryCode: string;
}

export interface TCustomer {
  id: string;
  customerCode: string;
  customerName: string;
  mobileNo: number;
  dateOfBirth: string;
  gender: string;
  stateCode: string;
  townshipCode: string;
}

export interface TProductCategory {
  id: number;
  productCategoryCode: string;
  productCategoryName: string;
}

export interface TStaff {
  id: number;
  staffCode: string;
  staffName: string;
  dateOfBirth: Date;
  mobileNo: string;
  address: string;
  gender: "Male" | "Female" | "Other";
  position: string;
}

export interface TShop {
  id: number;
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
  page: number;
  items: number;
}

export interface TInvoice {
  id: number;
  saleInvoiceDateTime: string;
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
}

export interface TProductInCart {
  product: TProduct;
  count: number;
}
