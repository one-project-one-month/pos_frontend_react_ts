import { TFromConst } from "@/constants/form-constant"
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
        <div className={cn("w-3/5 m-auto", { "w-full": formconst.length > 4 })} >
            <h1 className="text-3xl my-5 text-cyan-900">{title}</h1>
            <div className={cn("grid gap-x-8 ", { "grid-cols-2": formconst.length > 4 })}>
                {formconst.map((item) => {
                    const hasError = errors[item.name as keyof Inputs];
                    const isRequired = { required: `${item.placeholder} is required` };

                    let inputElement;
                    switch (item.type) {
                        case 'text':
                            inputElement = (
                                <input
                                    id={item.placeholder}
                                    {...register(item.name as keyof Inputs, isRequired)}
                                    placeholder={`Enter ${item.placeholder}`}
                                    className="border border-gray-300 py-1 px-3 focus:outline outline-blue-100 rounded text-slate-700 placeholder:text-sm"
                                />
                            );
                            break;
                        case 'date':
                            inputElement = (
                                <input
                                    type="date"
                                    id={item.placeholder}
                                    {...register(item.name as keyof Inputs, isRequired)}
                                    className="border border-gray-300 focus:outline outline-blue-100 text-slate-700 rounded py-1 px-2  placeholder:text-sm"
                                />
                            );
                            break;
                        case 'select':
                            inputElement = (
                                <select
                                    id={item.placeholder}
                                    {...register(item.name as keyof Inputs, isRequired)}
                                    className="border bg-transparent  focus:outline-none  rounded py-1 px-2 text-slate-700  placeholder:text-sm"
                                >
                                    {item.selectValue?.map((value, index) => (
                                        <option key={value.value} value={value.value} hidden={index === 0}>
                                            {value.placeholder}
                                        </option>
                                    ))}
                                </select>
                            );
                            break;
                        case "number":
                            inputElement = (
                                <input
                                    type="number"
                                    id={item.placeholder}
                                    {...register(item.name as keyof Inputs, { ...isRequired, valueAsNumber: true })}
                                    placeholder={`Enter ${item.placeholder}`}
                                    className="border border-gray-300 py-1 px-3 focus:outline outline-blue-100 rounded text-slate-700 placeholder:text-sm"
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
                            {hasError ? <p className="text-red-500">{errors[item.name as keyof Inputs]?.message}</p> : null}
                        </div>
                    );
                })}
            </div>
            <div className="flex">
                <button type="submit" className={cn("bg-slate-900 rounded py-2 text-white mt-3 w-full", { " w-22 py-1 px-6 flex-start": formconst.length > 4 })}>Submit</button>
            </div>
        </div >

    )

}

export default useRenderForm