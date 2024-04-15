import apiClient from "@/services/api/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TParams = {
  url: string;
  id: number;
};

const deleteData = async ({ url, id }: TParams): Promise<void> => {
  await apiClient.delete(`${url}/${id}`);
};

export const useDeleteQuery = (url: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteData,
    onSettled: async () => {
      console.log("success");
      return await queryClient.invalidateQueries({ queryKey: [url] });
    },
  });
};
