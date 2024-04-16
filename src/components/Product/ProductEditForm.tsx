import {useLocation, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inputs} from "@/type/formSchema.ts";
import SubmitButton from "@/components/ui/submit-button.tsx";
import {productFormConst} from "@/constants/form-constate.ts";
import useRenderForm from "@/hook/useRenderForm.tsx";
import {editProductById} from "@/services/api/productApi.ts";


export default function ProductEditForm() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({
        defaultValues: {
            productCode: state.product.productCode,
            productName: state.product.productName,
            productCategoryCode: state.product.productCategoryCode,
            price: state.product.price
        }
    });

    const formElements = useRenderForm({formconst: productFormConst, errors, register});


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        editProductById(state.product.id, data)
        navigate("..", {relative: "path"})
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
            {formElements}
            <SubmitButton/>
        </form>
    );
}