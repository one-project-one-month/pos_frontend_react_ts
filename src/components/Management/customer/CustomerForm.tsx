import SubmitButton from "@/components/ui/submit-button"
import { customerFormConst } from "@/constants/form-constate"
import { useCreateNew } from "@/hook/management/useAddQuery"
import useRenderForm from "@/hook/useRenderForm"
import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"

const CustomerForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const formElements = useRenderForm({ formconst: customerFormConst, errors, register })
    const { mutate } = useCreateNew<Inputs>("customers")
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        mutate({ formData: data, route: 'customers' })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
            {formElements}
            <SubmitButton />
        </form >
    )

}

export default CustomerForm