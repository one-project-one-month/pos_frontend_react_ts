import { shopFormConst } from "@/constants/form-constate"
import { Inputs, formSchema } from "@/type/formSchema"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';


const ShopForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }
    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/6 m-auto">

            <div className="flex flex-col">
                {shopFormConst.map((item) => (
                    <div key={item.name} className="flex flex-col my-2">
                        <label className="mb-1" htmlFor={item.placeholder}>{item.placeholder}</label>
                        <input
                            id={item.placeholder}
                            {...register(item.name, {
                                required: `${item.placeholder} is required`
                            })}
                            placeholder={`Enter ${item.placeholder}`
                            }
                            className="border border-gray-300 rounded-lg p-2"
                        />
                        {errors[item.name] ? <p className="text-red-400">{errors[item.name]?.message}</p> : null}
                    </div>

                ))
                }
                <input type="submit" className="bg-blue-900 text-white rounded mt-2" />
            </div>





        </form >
    )
}

export default ShopForm