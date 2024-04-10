import apiClient from "../api-client";

export const queryFn = async <T>(url: string): Promise<T[]> => {
  const { data } = await apiClient.get(url);
  return data;
};
