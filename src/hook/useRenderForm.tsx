import { TFromConst } from "@/constants/form-constate"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Inputs } from "@/type/formSchema"

type TRenderFormProps = {
    formconst: TFromConst[],
    errors: FieldErrors<Inputs>,
    register: UseFormRegister<Inputs>
}

const useRenderForm = ({ formconst, errors, register }: TRenderFormProps) => {
    return (
        <div className="grid grid-cols-2 gap-x-8">
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
                                className="border border-gray-300 rounded-lg p-2"
                            />
                        );
                        break;
                    case 'date':
                        inputElement = (
                            <input
                                type="date"
                                id={item.placeholder}
                                {...register(item.name, isRequired)}
                                className="border border-gray-300 rounded-lg p-2"
                            />
                        );
                        break;
                    case 'select':
                        inputElement = (
                            <select
                                id={item.placeholder}
                                {...register(item.name, isRequired)}
                                className="border border-gray-300 rounded-lg p-2"
                            >
                                {item.selectValue?.map((value, index) => (
                                    <option key={index} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        );
                        break;
                    case "number" :
                        inputElement = (
                            <input
                                type="text"
                                id={item.placeholder}
                                {...register(item.name, {...isRequired, valueAsNumber: true})}
                                placeholder={`Enter ${item.placeholder}`}
                                className="border border-gray-300 rounded-lg p-2"
                            />
                        )
                        break;
                    default:
                        inputElement = null;
                }

                return (
                    <div key={item.name} className="flex flex-col my-2">
                        <label className="mb-1" htmlFor={item.placeholder}>{item.placeholder}</label>
                        {inputElement}
                        {hasError ? <p className="text-red-400">{errors[item.name]?.message}</p> : null}
                    </div>
                );
            })}
        </div>

    )

}

export default useRenderForm