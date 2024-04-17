import {useLocation, useNavigate} from "react-router-dom";
import {useFormDefaultValue} from "@/hook/useFormDefaultValue.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inputs} from "@/type/formSchema.ts";
import useRenderForm from "@/hook/useRenderForm.tsx";
import {categoryFormConst} from "@/constants/form-constate.ts";
import {useEditCategory} from "@/services/mutation.ts";
import SubmitButton from "@/components/ui/submit-button.tsx";

export default function CategoryEditForm() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {defaultValues} = useFormDefaultValue(state);
    const {mutate} = useEditCategory(state.id);


    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({
        defaultValues
    });

    const formElements = useRenderForm({formconst: categoryFormConst, errors, register});


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        mutate({id:state.id, ...data})
        navigate(`..`, {relative: "path"});
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
            {formElements}
            <SubmitButton/>
        </form>
    );
}