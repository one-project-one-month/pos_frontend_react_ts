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

