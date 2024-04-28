import Loading from "@/components/ui/loading"
import { toast } from "@/components/ui/use-toast"
import { staffFormConst } from "@/constants/form-constant"
import { useUpdateQuery } from "@/hook/management/useUpateQuery"
import useRenderForm from "@/hook/useRenderForm"
import apiClient from "@/services/api/api-client"
import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"


const StaffEditForm = () => {
    const { staffId } = useParams()
    const navigate = useNavigate()

    const { register, handleSubmit, control, formState: { errors, isLoading } } = useForm<Inputs>({
        defaultValues: async () => {
            const { data } = await apiClient.get(`staffs/${staffId!}`)
            // data.data.staff.dateOfBirth = data.data.staff.dateOfBirth.slice(0, 10)
            return data.data.staff
        }

    })

    const formElements = useRenderForm({ formconst: staffFormConst, errors, register, title: "Edit staff info", control })

    const { mutateAsync } = useUpdateQuery<Inputs>("staffs")

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        navigate('..')
        toast({
            description: <Loading message="Updating" className="p-0" />
        })
        await mutateAsync({ formData: data, route: 'staffs', id: staffId! })
        toast({ description: "✅ Successfully updated" })
    }

    if (isLoading) {
        return (
            <div className="flex flex-col mt-4">
                <Loading message="Getting infos" />
            </div>
        )

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 m-auto ">
            {formElements}
        </form >
    )
}

export default StaffEditForm