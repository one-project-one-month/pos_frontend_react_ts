import apiClient from "@/services/api/api-client";
import { TJSONServerPaginationResponse } from "@/type/type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useCustomQuery = <T>(
  key: string,
  queryFn: () => Promise<T>,
  page: number
) => {
  const queryKey = [key, page];
  return useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,
  });
};

const queryByPage = async <T>(
  url: string,
  page: number
): Promise<TJSONServerPaginationResponse<T[]>> => {
  const { data } = await apiClient.get<TJSONServerPaginationResponse<T[]>>(
    `/${url}?_page=${page}&_per_page=5`
  );
  return data;
};

export const useCustomQueryByPage = <T>(key: string, page: number) => {
  const queryKey = [key, page];
  return useQuery<TJSONServerPaginationResponse<T[]>, Error>({
    queryKey: queryKey,
    queryFn: () => queryByPage(key, page),
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,
  });
};
