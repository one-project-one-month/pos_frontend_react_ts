import SubmitButton from "@/components/ui/submit-button"
import { useToast } from "@/components/ui/use-toast"
import { customerFormConst } from "@/constants/form-constate"
import { useCreateNew } from "@/hook/management/useAddQuery"
import useRenderForm from "@/hook/useRenderForm"
import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const CustomerForm = () => {
    const navigate = useNavigate()
    const { toast } = useToast()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const formElements = useRenderForm({ formconst: customerFormConst, errors, register })
    const { mutate } = useCreateNew<Inputs>("customers")
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        mutate({ formData: data, route: 'customers' })
        navigate('/management/staffs')
        toast({ description: "Success" })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
            {formElements}
            <SubmitButton />
        </form >
    )

}

export default CustomerForm