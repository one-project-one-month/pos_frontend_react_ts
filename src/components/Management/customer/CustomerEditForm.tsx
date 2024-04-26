import Loading from "@/components/ui/loading"
import { useToast } from "@/components/ui/use-toast"
import { customerFormConst } from "@/constants/form-constant.ts"
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

    const { register, handleSubmit, formState: { errors, isLoading } } = useForm<Inputs>({
        defaultValues: async () => {
            const { data } = await apiClient.get(`customer/${customerId}`)
            data.data.customer.customerDOB = data.data.customer.customerDOB.slice(0, 10)
            return data.data.customer
        }
    })
    const { mutateAsync: updateForm } = useUpdateQuery<Inputs>("customer")
    const formElements = useRenderForm({ formconst: customerFormConst, errors, register, title: "Edit customer info" })

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        navigate('..')
        toast({ description: <Loading message="Updating" className="p-0" /> })
        await updateForm({ formData: data, route: 'customers', id: customerId! })
        toast({ description: "Successfully updated" })
    }

    if (isLoading) {
        return (
            <div className="flex flex-col mt-4">
                <Loading message="Getting infos" />
            </div>
        )
    }

    return (
        <form className="w-3/6 m-auto flex h-screen items-center" onSubmit={handleSubmit(onSubmit)}>
            {formElements}
        </form>
    )
}

export default CustomerEditForm