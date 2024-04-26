import { TInvoice } from "@/type/type";
import apiClient from "./api-client";

export const getInvoices = async (params: {fromDate? :string,toDate? :string, month?: string}) => {
  let queryParams = "";
  if (params.fromDate && params.toDate) {
    queryParams += `start=${params.fromDate}&end=${params.toDate}`;
  } else if (params.month) {
    queryParams += `month=${params.month}`;
  }

  const {data} = await apiClient.get(`/sale-invoices${queryParams ? `?${queryParams}` : ''}`);
  const response = data.data as { saleInvoices: TInvoice[] }
  return response.saleInvoices;
};
