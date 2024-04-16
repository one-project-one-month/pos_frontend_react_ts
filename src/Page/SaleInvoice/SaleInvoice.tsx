import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { queryFn } from "@/services/api/management/queryFn"
import { TCustomer, TInvoiceFormValues, TStaff, TInvoiceItemProps } from "@/type/type"
import { useRef } from "react"
import { Path, useForm, UseFormRegister, SubmitHandler, FieldErrors } from "react-hook-form"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
  
  type InputProps = {
    label: Path<TInvoiceFormValues>
    register: UseFormRegister<TInvoiceFormValues>,
    errors: FieldErrors<TInvoiceFormValues>,
    datas?: (TCustomer | TStaff)[] | undefined,
    required: boolean,
  }
  
  const Input = ({ label, register,errors }: InputProps) =>  {

    const isNumberInput = label === "Payment Amount" || label === "Receive Amount";

    return (
      <div className="flex my-2 items-center justify-between">
        <label className="mb-1">{label}</label>
        <div className="flex flex-col">
          <input 
          {...register(label, { 
            required: `${label} is required`, 
            ...(isNumberInput && { 
              pattern: {
                value: /^[0-9]*$/,
                message: "Please enter a number value only"
              } 
            }) 
          })} type={isNumberInput ? 'number' : 'text'} step={isNumberInput ? '1' : undefined} placeholder={`Enter ${label}`} className="w-64 border border-gray-300 rounded-lg p-2" />  
          {errors?.[label] ? <p className="text-red-400">{errors?.[label]?.message}</p> : null}
        </div>
      </div>
    )
  }

  const Select = ({ label, register, errors, datas }: InputProps) => (
      <div className="flex my-2 items-center justify-between">
        <label className="mb-1">{label}</label>
        <div className="flex flex-col">
          <select {...register(label, { required: `${label} is required` })} className="w-64 border border-gray-300 rounded-lg p-2 bg-white">
            <option value="" hidden>{`Select ${label}`}</option>
            {label === "Payment Type" ? (
              ['Cash', 'Mobile Payment'].map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))
            ) : (
              datas?.map((data) => (
                <option key={data.id} value={data.id}>
                  {label === "Customers" ? (data as TCustomer).customerName : label === "Staffs" ? (data as TStaff).staffName : null}
                </option>
              ))
            )}
          </select>
        {errors?.[label] ? <p className="text-red-400">{errors?.[label]?.message}</p> : null}
        </div>
      </div>
  )

  const InvoiceItem: React.FC<TInvoiceItemProps> = ({ label, value }) => (
    <div className="flex justify-between">
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );

const SaleInvoice = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<TInvoiceFormValues>()
  const ref = useRef<HTMLFormElement>(null);
  const { data: customers } = useCustomQuery<TCustomer[]>(
    "customers",
    () => queryFn("customers"),
    0,
)
const { data: staffs } = useCustomQuery<TStaff[]>(
  "staffs",
  () => queryFn("staffs"),
  0,
)

  const onSubmit: SubmitHandler<TInvoiceFormValues> = (data) => {
    console.log(data);    
  }

  const handleSave = () => {  
    if(ref.current){
      handleSubmit(onSubmit)()
    }
  }

  return (
    <div className="w-9/12 mx-auto my-10">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl">New Invoice</h1>
            <button className="bg-gray-900 text-white inline-block py-2 px-4 rounded-md" onClick={handleSave}>Save</button>
        </div>
        <div className="mt-5 bg-gray-100 py-3 px-5 rounded-sm">
            <form className="grid grid-cols-2 gap-x-40" ref={ref}>
              <Input label="Voucher No" register={register} required errors={errors} />
              <Select label="Payment Type" register={register} required errors={errors} />
              <Select label="Customers" datas={customers} register={register} required errors={errors} />
              <Input label="Payment Amount" register={register} required errors={errors} />
              <Select label="Staffs" datas={staffs} register={register} required errors={errors} />
              <Input label="Receive Amount" register={register} required errors={errors} />  
            </form>
            <Table className="rounded-md border my-5 bg-white">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">No.</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Total Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Bag</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>40,000</TableCell>
                  <TableCell className="text-right">40,000 MMK</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>Top</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>15,000</TableCell>
                  <TableCell className="text-right">30,000 MMK</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex justify-end">
              <div className="w-1/4 flex flex-col gap-2">
              <InvoiceItem label="Subtotal" value="70,000 MMK" />
      <InvoiceItem label="Discount" value="500 MMK" />
      <InvoiceItem label="Tax" value="0.00" />
              <div className="w-full h-[1px] bg-gray-300" />
              <InvoiceItem label="Total" value="65,000 MMK" />
              <InvoiceItem label="Amount Paid" value="70,000 MMK" />
              <div className="w-full h-[1px] bg-gray-300" />
              <InvoiceItem label="Changed" value="500 MMK" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default SaleInvoice