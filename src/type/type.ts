export interface TProduct {
    id: number;
    productCode: string;
    productName: string;
    price: 999;
    productCategoryCode: string;
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
    mobileNo : string;
    address :string;
}

export interface TInvoice {
    id: number,
    saleInvoiceDateTime: string,
    voucherNo: string,
    totalAmount: number,
    discount: number,
    staffCode: string,
    tax: number,
    paymentType: string,
    paymentAmount: number,
    receiveAmount: number,
    change: number,
    customerCode: string
}
