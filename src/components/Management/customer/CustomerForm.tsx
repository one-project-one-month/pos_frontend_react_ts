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
    const formElements = useRenderForm({ formconst: customerFormConst, errors, register, title: "Customer" })
    const mutation = useCreateNew<Inputs>("customers")
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await mutation.mutateAsync({ formData: data, route: 'customers' })
        navigate('..')
        toast({ description: "Successfully added" })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
            {formElements}
        </form >
    )

}

export default CustomerForm