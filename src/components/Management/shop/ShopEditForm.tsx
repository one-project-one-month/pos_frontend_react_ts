import SubmitButton from "@/components/ui/submit-button"
import { toast } from "@/components/ui/use-toast"
import { shopFormConst } from "@/constants/form-constate"
import { useUpdateQuery } from "@/hook/management/useUpateQuery"
import useRenderForm from "@/hook/useRenderForm"
import apiClient from "@/services/api/api-client"
import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"


const ShopEditForm = () => {
    const { shopId } = useParams()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: async () => {
            const { data } = await apiClient.get(`shops/${shopId}`)
            return data
        }
    })
    const formElements = useRenderForm({ formconst: shopFormConst, errors, register })
    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        updateForm({ formData: data, route: 'shops', id: shopId! })
        navigate('..')
        toast({ description: "Successfully updated" })
    }

    const { mutate: updateForm } = useUpdateQuery<Inputs>("shops")

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-4/6 m-auto" >
            {formElements}
            <SubmitButton />
        </form>
    )
}

export default ShopEditForm