import SubmitButton from "@/components/ui/submit-button"
import { useToast } from "@/components/ui/use-toast"
import { customerFormConst } from "@/constants/form-constate"
import { useUpdateQuery } from "@/hook/management/useUpateQuery"
import useRenderForm from "@/hook/useRenderForm"
import apiClient from "@/services/api/api-client"
import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"


const CustomerEditForm = () => {
    const { customerId } = useParams()
    const { toast } = useToast()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: async () => {
            const { data } = await apiClient.get(`customers/${customerId}`)
            return data
        }
    })
    const { mutate: updateForm } = useUpdateQuery<Inputs>("customers")
    const formElements = useRenderForm({ formconst: customerFormConst, errors, register })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        updateForm({ formData: data, route: 'customers', id: customerId! })
        navigate('..')
        toast({ description: "Successfully updated" })
    }
    return (
        <form className="w-4/6 m-auto" onSubmit={handleSubmit(onSubmit)}>
            {formElements}
            <SubmitButton />
        </form>
    )
}

export default CustomerEditForm