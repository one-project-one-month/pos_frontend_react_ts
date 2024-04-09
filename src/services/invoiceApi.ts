import { TInvoice } from "@/type/type";
import apiClient from "./api-client";

export const getInvoices = async () => {
  const response = await apiClient.get<TInvoice[]>(`/saleInvoice`);
  return response.data;
};
