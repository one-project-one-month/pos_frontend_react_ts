import apiClient from "@/services/api/api-client";
import { TApiResponse } from "@/type/type";
import { useQuery } from "@tanstack/react-query";

const queryFn = async <T>(url: string): Promise<T[]> => {
  const { data } = await apiClient.get<TApiResponse<T>>(`/${url}`);
  const typedData = data.data as { [key: string]: T[] };
  const dynamicKey = Object.keys(typedData)[0];

  return typedData[dynamicKey];
};

export const useCustomQuery = <T>(endpoint: string) => {
  const queryKey = [endpoint];
  return useQuery<T[]>({
    queryKey,
    queryFn: () => queryFn(endpoint),
    staleTime: 5 * 60 * 1000,
    throwOnError: true,
  });
};

const queryFnById = async (url: string, id: string) => {
  const { data } = await apiClient.get(`/${url}/${id}`);
  const dynamicKey = Object.keys(data.data)[0];

  return data.data[dynamicKey];
};

export const useCustomQueryById = (endpoint: string, id: string) => {
  const queryKey = [endpoint, id];
  return useQuery({
    queryKey,
    queryFn: () => queryFnById(endpoint, id),
    staleTime: 5 * 60 * 1000,
  });
};
