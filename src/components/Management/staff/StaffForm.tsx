import Loading from "@/components/ui/loading"
import { useToast } from "@/components/ui/use-toast"
import { staffFormConst } from "@/constants/form-constant"
import { useCreateNew } from "@/hook/management/useAddQuery"
import useRenderForm from "@/hook/useRenderForm"
import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const StaffForm = () => {
    const navigate = useNavigate()
    const { toast } = useToast()
    const { register, handleSubmit, control, formState: { errors } } = useForm<Inputs>()
    const formElements = useRenderForm({ formconst: staffFormConst, errors, register, title: "Add new staff", control })
    const { mutateAsync } = useCreateNew("staffs")
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        navigate("..")
        toast({ description: <Loading message="Adding new" className="p-0" /> })
        await mutateAsync({ formData: data, route: 'staffs' })
        toast({ description: "✅ Success added" })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" w-5/6 m-auto">
            {formElements}
        </form >
    );
}

export default StaffForm