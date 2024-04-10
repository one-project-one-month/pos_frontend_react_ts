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
  });
};
