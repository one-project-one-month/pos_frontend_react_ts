import { toast } from "@/components/ui/use-toast"
import { staffFormConst } from "@/constants/form-constant.ts"
import { useUpdateQuery } from "@/hook/management/useUpateQuery"
import useRenderForm from "@/hook/useRenderForm"
import apiClient from "@/services/api/api-client"
import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"


const StaffEditForm = () => {
    const { staffId } = useParams()
    const navigate = useNavigate()


    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: async () => {
            const { data } = await apiClient.get(`staffs/${staffId!}`)
            return data
        }
    })
    const formElements = useRenderForm({ formconst: staffFormConst, errors, register, title: "Staff Edit" })
    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        mutate({ formData: data, route: 'staffs', id: staffId! })
        navigate('..')
        toast({ description: "Successfully updated" })
    }

    const { mutate } = useUpdateQuery<Inputs>("staffs")

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto" >
            {formElements}
        </form>
    )
}

export default StaffEditForm