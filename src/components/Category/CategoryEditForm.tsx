import {useNavigate, useParams} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inputs} from "@/type/formSchema.ts";
import useRenderForm from "@/hook/useRenderForm.tsx";
import {categoryFormConst} from "@/constants/form-constate.ts";
import {useUpdateQuery} from "@/hook/management/useUpateQuery.ts";
import apiClient from "@/services/api/api-client.ts";

export default function CategoryEditForm() {
    const {categoryId} = useParams();
    const navigate = useNavigate();

    const {mutate} = useUpdateQuery("product-categories");


    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({
        defaultValues: async () => {
            const {data} = await apiClient.get(`product-categories/${categoryId}`);
            return data.data.category;
        }
    });

    const formElements = useRenderForm({
        formconst: categoryFormConst,
        errors,
        register,
        title: "Product Category Edit"
    });


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        mutate({formData: data, route: "product-categories", id: categoryId!});
        navigate(`../..`, {relative: "path"});
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
            {formElements}
        </form>
    );
}