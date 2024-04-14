import SubmitButton from "@/components/ui/submit-button"
import { useToast } from "@/components/ui/use-toast"
import { shopFormConst } from "@/constants/form-constate"
import { useCreateNew } from "@/hook/management/useAddQuery"
import useRenderForm from "@/hook/useRenderForm"

import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"





const ShopForm = () => {
    const navigate = useNavigate()
    const { toast } = useToast()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const formElements = useRenderForm({ formconst: shopFormConst, errors, register })
    const { mutate } = useCreateNew("shops");
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        mutate({ formData: data, route: 'shops' })
        navigate('/management/shops')
        toast({ description: "Success" })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
            {formElements}
            <SubmitButton />
        </form >
    )
}

export default ShopForm