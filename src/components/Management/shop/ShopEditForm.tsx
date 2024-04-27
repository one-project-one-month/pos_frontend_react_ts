import { toast } from "@/components/ui/use-toast"
import { shopFormConst } from "@/constants/form-constant"
import { useUpdateQuery } from "@/hook/management/useUpateQuery"
import useRenderForm from "@/hook/useRenderForm"
import apiClient from "@/services/api/api-client"
import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"


const ShopEditForm = () => {
    const { shopId } = useParams()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors, isLoading } } = useForm<Inputs>({
        defaultValues: async () => {
            const { data } = await apiClient.get(`shops/${shopId}`)
            data.data.staff.dateOfBirth = data.data.staff.dateOfBirth.slice(0, 10)
            return data
        }
    })
    const formElements = useRenderForm({ formconst: shopFormConst, errors, register, title: "Shop Edit" })

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        updateForm({ formData: data, route: 'shops', id: shopId! })
        navigate('..')
        toast({ description: "✅ Successfully updated" })
    }

    const { mutate: updateForm } = useUpdateQuery<Inputs>("shops")

    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-4/6 m-auto" >
            {formElements}
        </form>
    )
}

export default ShopEditForm