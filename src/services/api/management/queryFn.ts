import apiClient from "../api-client";

export const queryFn = async <T>(url: string): Promise<T[]> => {
  const { data } = await apiClient.get(url);
  return data;
};

export const queryById = async <T>(url: string, id: string): Promise<T[]> => {
  const { data } = await apiClient.get<T[]>(`${url}/${id}`);
  return data;
};
