import { toast } from "@/components/ui/use-toast";
import apiClient from "@/services/api/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TVariable<T> = {
  formData: T;
  route: string;
  id: string;
};

const updateFn = async <T>({
  formData,
  route,
  id,
}: TVariable<T>): Promise<T[]> => {
  const { data } = await apiClient.patch<T[]>(`/${route}/${id}`, formData);
  return data;
};

export const useUpdateQuery = <T = unknown>(key: string) => {
  const queryClient = useQueryClient();
  return useMutation<T[], Error, TVariable<T>>({
    mutationFn: updateFn,
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: [key] });
    },
    onError: () => {
      toast({
        description: "❎ Something went wrong.",
      });
    },
  });
};
