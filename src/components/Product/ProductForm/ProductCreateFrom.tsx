import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "@/type/formSchema.ts";
import useRenderForm from "@/hook/useRenderForm.tsx";
import { productFormConst } from "@/constants/form-constant";
import { useToast } from "@/components/ui/use-toast.ts";
import { useCreateNew } from "@/hook/management/useAddQuery.ts";
import Loading from "@/components/ui/loading";

export default function ProductCreateFrom() {
    const navigate = useNavigate();
    const { toast } = useToast();
    const pathName = "products";
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const formElements = useRenderForm({ formconst: productFormConst, errors, register, title: "Add new product" });
    const { mutateAsync } = useCreateNew(pathName);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        toast({ description: <Loading message="Adding new product" className="p-0" /> });
        await mutateAsync({ formData: data, route: pathName });
        navigate(`..`, { relative: "path" });
        toast({ description: "✅ Successfully added" });
    };


    return (
        <div className="w-4/6 m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                {formElements}
            </form>
        </div>
    );
}