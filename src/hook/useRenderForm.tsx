import { TFromConst } from "@/constants/form-constate"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Inputs } from "@/type/formSchema"
import { cn } from "@/lib/utils"

type TRenderFormProps = {
    formconst: TFromConst[],
    errors: FieldErrors<Inputs>,
    register: UseFormRegister<Inputs>,
    title: string
}

const useRenderForm = ({ formconst, errors, register, title }: TRenderFormProps) => {
    return (
        <div className={cn("w-3/6 m-auto", { "w-full": formconst.length > 4 })} >
            <h1 className="text-3xl mb-5 text-slate-900/70">{title} form</h1>
            <div className={cn("grid gap-x-8 ", { "grid-cols-2": formconst.length > 4 })}>
                {formconst.map((item) => {
                    const hasError = errors[item.name];
                    const isRequired = { required: `${item.placeholder} is required` };

                    let inputElement;
                    switch (item.type) {
                        case 'text':
                            inputElement = (
                                <input
                                    id={item.placeholder}
                                    {...register(item.name, isRequired)}
                                    placeholder={`Enter ${item.placeholder}`}
                                    className="border border-gray-300 rounded-lg py-2 px-4 placeholder:text-sm"
                                />
                            );
                            break;
                        case 'date':
                            inputElement = (
                                <input
                                    type="date"
                                    id={item.placeholder}
                                    {...register(item.name, isRequired)}
                                    className="border border-gray-300 rounded-lg py-2 px-4  placeholder:text-sm"
                                />
                            );
                            break;
                        case 'select':
                            inputElement = (
                                <select
                                    id={item.placeholder}
                                    {...register(item.name, isRequired)}
                                    className="border border-gray-300 rounded-lg py-2 px-4  placeholder:text-sm"
                                >
                                    {item.selectValue?.map((value, index) => (
                                        <option key={index} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            );
                            break;
                        case "number":
                            inputElement = (
                                <input
                                    type="text"
                                    id={item.placeholder}
                                    {...register(item.name, { ...isRequired, valueAsNumber: true })}
                                    placeholder={`Enter ${item.placeholder}`}
                                    className="border border-gray-300 rounded-lg py-2 px-4 placeholder:text-sm"
                                />
                            )
                            break;
                        default:
                            inputElement = null;
                    }

                    return (
                        <div key={item.name} className="flex flex-col my-2">
                            <label className="mb-1 text-l" htmlFor={item.placeholder}>{item.placeholder}</label>
                            {inputElement}
                            {hasError ? <p className="text-red-500">{errors[item.name]?.message}</p> : null}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <button type="submit" className={cn("bg-slate-900 rounded py-2 text-white mt-3 w-full", { " w-3/6": formconst.length > 4 })}>Submit</button>
            </div>
        </div >

    )

}

export default useRenderForm