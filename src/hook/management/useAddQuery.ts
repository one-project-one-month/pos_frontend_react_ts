import { toast } from "@/components/ui/use-toast";
import apiClient from "@/services/api/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TVariable<T> = {
  formData: T;
  route: string;
};

const createNew = async <T, P>({
  formData,
  route,
}: TVariable<T>): Promise<P> => {
  const { data } = await apiClient.post<P>(`/${route}`, formData);
  return data;
};

export const useCreateNew = <T = unknown>(url: string) => {
  const queryClient = useQueryClient();
  return useMutation<T, Error, TVariable<T>>({
    mutationFn: createNew,
    onSuccess: async () => {
      return await queryClient.invalidateQueries({ queryKey: [url] });
    },
    onError: (error) => {
      toast({ description: error.message });
    },
  });
};
