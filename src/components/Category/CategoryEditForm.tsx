import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "@/type/formSchema.ts";
import useRenderForm from "@/hook/useRenderForm.tsx";
import {categoryFormConst} from "@/constants/form-constant.ts";
import {useUpdateQuery} from "@/hook/management/useUpateQuery.ts";
import apiClient from "@/services/api/api-client.ts";
import BackButton from "../BackButton";

export default function CategoryEditForm() {
    const {categoryId} = useParams();
    const navigate = useNavigate();

    const {mutateAsync} = useUpdateQuery("product-categories");

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: async () => {
            try {
                const {data} = await apiClient.get(`product-categories/${categoryId}`);
                return data.data.category;
            } catch (e) {
                return {};
            }
        }
    });

    const formElements = useRenderForm({
        formconst: categoryFormConst,
        errors,
        register,
        title: "Product Category Edit"
    });


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await mutateAsync({formData: data, route: "product-categories", id: categoryId!});
        navigate(`../..`, {relative: "path"});
    };


    return (
        <div  className="w-4/6 m-auto">
            <BackButton route="/product-category" />
            <form onSubmit={handleSubmit(onSubmit)}>
                {formElements}
            </form>
        </div>
    );
}