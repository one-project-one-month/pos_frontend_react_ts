import { useQuery } from "@tanstack/react-query";

export const useCustomQuery = <T>(key: string, queryFn: () => Promise<T>) => {
  const queryKey = [key];
  return useQuery({ queryKey, queryFn, staleTime: 1000 * 60 * 60 });
};
