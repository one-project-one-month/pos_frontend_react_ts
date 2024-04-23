import apiClient from "@/services/api/api-client";
import { useQuery } from "@tanstack/react-query";

const queryFn = async <T>(url: string): Promise<T[]> => {
  const { data } = await apiClient.get<T[]>(`/${url}`);
  return data;
};

export const useCustomQuery = <T>(endpoint: string) => {
  const queryKey = [endpoint];
  return useQuery<T[]>({
    queryKey: queryKey,
    queryFn: () => queryFn(endpoint),
    staleTime: 5 * 60 * 1000,
  });
};
