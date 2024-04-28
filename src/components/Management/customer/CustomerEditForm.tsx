import BackButton from "@/components/BackButton"
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

    const { register, handleSubmit, control, formState: { errors, isLoading } } = useForm<Inputs>({
        defaultValues: async () => {
            const { data } = await apiClient.get(`customer/${customerId}`)
            // data.data.customer.customerDOB = data.data.customer.customerDOB.slice(0, 10)
            return data.data.customer
        }
    })
    const { mutateAsync: updateForm } = useUpdateQuery<Inputs>("customer")
    const formElements = useRenderForm({ formconst: customerFormConst, errors, register, title: "Edit customer info", control })

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        navigate('..')
        toast({ description: <Loading message="Updating" className="p-0" /> })
        await updateForm({ formData: data, route: 'customer', id: customerId! })
        toast({ description: "✅Successfully updated" })
    }

    if (isLoading) {
        return (
            <div className="flex flex-col mt-4">
                <Loading message="Getting infos" />
            </div>
        )
    }

    return (
        <div  className="w-4/6 mx-auto mt-8">
            <BackButton route="/customers" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
                {formElements}
            </form >
        </div>
    )
}

export default CustomerEditForm