import Loading from "@/components/ui/loading"
import { useToast } from "@/components/ui/use-toast"
import { customerFormConst } from "@/constants/form-constant"
import { useCreateNew } from "@/hook/management/useAddQuery"
import useRenderForm from "@/hook/useRenderForm"
import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const CustomerForm = () => {
    const navigate = useNavigate()
    const { toast } = useToast()
    const { register, handleSubmit, control, formState: { errors } } = useForm<Inputs>()
    const formElements = useRenderForm({ formconst: customerFormConst, errors, register, title: "Add new customer", control })
    const { mutateAsync } = useCreateNew<Inputs>("customer")
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        navigate('..')
        toast({ description: <Loading message="Adding new" className="p-0" /> })
        await mutateAsync({ formData: data, route: 'customer' })
        toast({ description: "✅ Successfully added" })
    }

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-4/5 m-auto"
        >
            {formElements}
        </form >

    )

}

export default CustomerForm