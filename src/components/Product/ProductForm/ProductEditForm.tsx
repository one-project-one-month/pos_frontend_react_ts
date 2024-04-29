import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "@/type/formSchema.ts";
import { productFormConst } from "@/constants/form-constant";
import useRenderForm from "@/hook/useRenderForm.tsx";
import apiClient from "@/services/api/api-client.ts";
import { useUpdateQuery } from "@/hook/management/useUpateQuery.ts";
import { toast } from "@/components/ui/use-toast.ts";



export default function ProductEditForm() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const { mutateAsync: updateForm } = useUpdateQuery<Inputs>("products");


    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: async () => {
            const { data } = await apiClient.get(`products/${productId}`);
            return data;
        }
    });
    const formElements = useRenderForm({ formconst: productFormConst, errors, register, title: "Edit product" });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await updateForm({ formData: data, route: "products", id: productId! });
        navigate("../..", { relative: "path" });
        toast({ description: "✅ Successfully updated" });
    };

    return (
        <div className="w-4/6 m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                {formElements}
            </form>
        </div>
    );
}