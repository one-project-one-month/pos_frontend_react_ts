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
  id: string;
  staffCode: string;
  staffName: string;
  dateOfBirth: Date;
  mobileNo: string;
  address: string;
  gender: "Male" | "Female" | "Other";
  position: "Manager" | "Sales Associate" | "Storekeeper";
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

export interface TInvoiceFormValues {
  voucherNo: string,
  customers: string,
  staffs: string,
  paymentType: string,
  paymentAmount: number,
  receiveAmount: number,
}

export interface TInvoiceItemProps {
  label: string;
  value: string | number;
}

export interface DateTimeOptions {
  year: 'numeric' | '2-digit' | undefined;
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long' | undefined;
  day: 'numeric' | '2-digit' | undefined;
  hour: 'numeric' | '2-digit' | undefined;
  minute: 'numeric' | '2-digit' | undefined;
  hour12: boolean | undefined;
}