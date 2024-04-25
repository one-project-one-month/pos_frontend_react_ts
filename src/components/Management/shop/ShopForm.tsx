import { useToast } from "@/components/ui/use-toast"
import { shopFormConst } from "@/constants/form-constant"
import { useCreateNew } from "@/hook/management/useAddQuery"
import useRenderForm from "@/hook/useRenderForm"

import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"





const ShopForm = () => {
    const navigate = useNavigate()
    const { toast } = useToast()
    const pathName = 'shops'
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const formElements = useRenderForm({ formconst: shopFormConst, errors, register, title: "Shop" })
    const { mutateAsync } = useCreateNew(pathName);
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await mutateAsync({ formData: data, route: pathName })
        navigate('..')
        toast({ description: "Successfully added" })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
            {formElements}
        </form >
    )
}

export default ShopForm