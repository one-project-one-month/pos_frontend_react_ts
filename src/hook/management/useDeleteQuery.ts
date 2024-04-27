import { toast } from "@/components/ui/use-toast";
import apiClient from "@/services/api/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TParams = {
  url: string;
  id: string;
};

const deleteData = async ({ url, id }: TParams): Promise<void> => {
  await apiClient.delete(`${url}/${id}`);
};

export const useDeleteQuery = (url: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteData,
    onSuccess: async () => {
      return await queryClient.invalidateQueries({ queryKey: [url] });
    },
    onError: () => {
      toast({
        title: "❎ Something went wrong.",
      });
    },
  });
};
