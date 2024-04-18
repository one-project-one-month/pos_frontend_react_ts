import {useLocation, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inputs} from "@/type/formSchema.ts";
import useRenderForm from "@/hook/useRenderForm.tsx";
import {productFormConst} from "@/constants/form-constate.ts";
import SubmitButton from "@/components/ui/submit-button.tsx";

import {useCreateProduct} from "@/services/mutation.ts";

export default function ProductCreateFrom() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const formElements = useRenderForm({formconst: productFormConst, errors, register});
    // const { mutate } = useCreateNew("product");
    const {state} = useLocation();

     const {mutate} = useCreateProduct(state);
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        mutate(data);
        navigate(`..`, {relative: "path"});
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
            {formElements}
            <SubmitButton/>
        </form>
    );
}