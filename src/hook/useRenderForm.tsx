import { TFromConst } from "@/constants/form-constant"
import { Control, FieldErrors, UseFormRegister } from "react-hook-form"
import { Inputs } from "@/type/formSchema"
import { cn } from "@/lib/utils"
import { CalculatorIcon, CircleAlert } from 'lucide-react';
import { FormField } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

type TRenderFormProps = {
    formconst: TFromConst[],
    errors: FieldErrors<Inputs>,
    register: UseFormRegister<Inputs>,
    control?: Control<Inputs>
    title: string
}

const useRenderForm = ({ formconst, errors, register, title, control }: TRenderFormProps) => {
    return (
        <div className={cn("w-3/5 m-auto", { "w-full": formconst.length > 4 })} >
            <h1 className={"mt-4 text-tertiary dark:text-dark-tertiary font-bold text-xl"}>{title}</h1>
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
                                    className={cn("border border-gray-200 py-1.5 shadow px-3  focus:outline outline-blue-100 rounded-lg text-slate-700 placeholder:text-sm", { "border border-red-600": hasError })}
                                />
                            );
                            break;
                        case 'date':
                            inputElement = (
                                <FormField
                                    control={control}
                                    name={item.name}
                                    rules={isRequired}
                                    render={({ field }) => (
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    className={cn("w-[280px] justify-start text-left text-black font-normal border border-gray-200 shadow bg-white hover:bg-gray-100",
                                                        !field.value && "text-muted-foreground",
                                                        { "border border-red-600": hasError }
                                                    )}
                                                >
                                                    <CalculatorIcon className="mr-2 h-4 w-4" />
                                                    {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                </Button >
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value as Date | undefined}
                                                    onSelect={field.onChange}
                                                    className="rounded-md border"
                                                    defaultMonth={new Date(2013, 1)}
                                                    captionLayout="dropdown-buttons"
                                                    fromMonth={new Date(1990, 1)}
                                                    toDate={new Date(2013, 12)}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    )}

                                >
                                </FormField>

                            );
                            break;
                        case 'select':
                            inputElement = (
                                <select
                                    id={item.placeholder}
                                    {...register(item.name, isRequired)}
                                    className={cn("border bg-white  focus:outline outline-blue-100 rounded-lg py-1.5 shadow px-3  text-slate-700  placeholder:text-sm", { "border border-red-600": hasError })}
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
                                    {...register(item.name, { ...isRequired, valueAsNumber: true })}
                                    placeholder={`Enter ${item.placeholder}`}
                                    className={cn("border border-gray-300 py-1.5 shadow px-3  focus:outline outline-blue-100 rounded-lg text-slate-700 placeholder:text-sm", { "border border-red-600": hasError })}
                                />
                            )
                            break;
                        default:
                            inputElement = null;
                    }

                    return (
                        <div key={item.name} className="flex flex-col my-2">
                            <label className="mb-1 text-l dark:text-white" htmlFor={item.placeholder}>{item.placeholder}</label>
                            {inputElement}
                            {hasError ?
                                <div className="text-red-500 flex items-center mt-1">
                                    <CircleAlert size={14} />
                                    <p className="ml-1">{errors[item.name]?.message}</p>
                                </div>
                                : null}
                        </div>
                    );
                })}
            </div>
            <div className="flex">
                <button type="submit" className={cn("bg-slate-900 dark:bg-white dark:text-black rounded py-2 text-white mt-3 w-full", { " w-22 py-1 px-6 flex-start": formconst.length > 4 })}>Submit</button>
            </div>
        </div >

    )

}

export default useRenderForm