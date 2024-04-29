import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "@/type/formSchema.ts";
import { productFormConst } from "@/constants/form-constant";
import useRenderForm from "@/hook/useRenderForm.tsx";
import apiClient from "@/services/api/api-client.ts";
import { useUpdateQuery } from "@/hook/management/useUpateQuery.ts";
import { toast } from "@/components/ui/use-toast.ts";
import { cn } from "@/lib/utils";
import { useCustomQuery } from "@/hook/management/useCustomQuery";
import { TProductCategory } from "@/type/type";
import { CircleAlert } from "lucide-react";
import Loading from "@/components/ui/loading";



export default function ProductEditForm() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const { mutateAsync: updateForm } = useUpdateQuery<Inputs>("products");

    const { data: categories, isFetched } = useCustomQuery<TProductCategory>("product-categories")


    const { register, handleSubmit, formState: { errors, isLoading } } = useForm<Inputs>({
        defaultValues: async () => {
            const { data } = await apiClient.get(`products/${productId!}`);
            return data.data.product;
        }
    });
    const formElements = useRenderForm({ formconst: productFormConst, errors, register, title: "Edit product", isRemoveButton: true });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        toast({ description: <Loading message="Updating..." className="p-0" /> });
        await updateForm({ formData: data, route: "products", id: productId! });
        navigate("../..", { relative: "path" });
        toast({ description: "✅ Successfully updated" });
    };

    if (!isFetched || isLoading) {
        return <Loading message="Getting the data..." />
    }

    return (
        <div className="w-4/6 m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                {formElements}
                <div className="w-3/5 mx-auto ">
                    <div className="my-2">
                        <label className=" text-l dark:text-white" htmlFor="category-code">Select product category code </label>
                        <select
                            id="category-code"
                            {...register("categoryCode", { required: "Product category code is required" })}
                            className={cn("mt-1 w-full border bg-white  focus:outline outline-blue-100 rounded-lg py-1.5 shadow px-3  text-slate-700  placeholder:text-sm",
                                { "border border-red-600": errors.categoryCode }
                            )}
                        >
                            <option value="" hidden >
                                Select product category code
                            </option>
                            {categories?.map((value) => (
                                <option key={value.productCategoryCode} value={value.productCategoryCode} >
                                    {value.productCategoryCode} : {value.productCategoryName}
                                </option>
                            ))}

                        </select>
                        {errors.categoryCode && (
                            <div className="text-red-500 flex items-center mt-1">
                                <CircleAlert size={14} />
                                <p className="ml-1">{errors.categoryCode.message}</p>
                            </div>
                        )}
                    </div>

                    <button type="submit" className={"bg-slate-900 dark:bg-white dark:text-black rounded py-2 text-white mt-3 w-full"}>Submit</button>
                </div>
            </form>

        </div>
    );
}