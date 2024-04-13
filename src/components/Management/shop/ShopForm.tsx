import SubmitButton from "@/components/ui/submit-button"
import { shopFormConst } from "@/constants/form-constate"
import useRenderForm from "@/hook/useRenderForm"
import apiClient from "@/services/api/api-client"
import { Inputs } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"



const ShopForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const formElements = useRenderForm({ formconst: shopFormConst, errors, register })
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await apiClient.post('/shops', data)
        navigate('/management/shops')
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 m-auto">
            {formElements}
            <SubmitButton />
        </form >
    )
}

export default ShopForm