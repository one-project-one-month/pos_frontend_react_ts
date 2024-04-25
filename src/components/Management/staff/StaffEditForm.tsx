import { toast } from "@/components/ui/use-toast"
import { staffFormConst } from "@/constants/form-constant"
import { useUpdateQuery } from "@/hook/management/useUpateQuery"
import useRenderForm from "@/hook/useRenderForm"
import apiClient from "@/services/api/api-client"
import { Inputs } from "@/type/formSchema"
import { Loader2 } from "lucide-react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"


const StaffEditForm = () => {
    const { staffId } = useParams()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors, isLoading } } = useForm<Inputs>({
        defaultValues: async () => {
            const { data } = await apiClient.get(`staffs/${staffId!}`)
            data.data.staff.dateOfBirth = data.data.staff.dateOfBirth.slice(0, 10)
            return data.data.staff
        }

    })
    
    const formElements = useRenderForm({ formconst: staffFormConst, errors, register, title: "Edit staff info" })

    const { mutateAsync } = useUpdateQuery<Inputs>("staffs")
 
    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        navigate('..')
        toast({
            description: <span className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating
            </span>
        })
        await mutateAsync({ formData: data, route: 'staffs', id: staffId! })
        toast({ description: "✅ Successfully updated" })
    }

    if (isLoading) {
        return <h1>Loading</h1>
    }


    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className="w-3/6 m-auto" >
                {formElements}
            </form>
        </>

    )
}

export default StaffEditForm