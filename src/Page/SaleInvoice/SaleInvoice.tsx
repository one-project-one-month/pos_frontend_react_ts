import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { queryFn } from "@/services/api/management/queryFn"
import { TCustomer, TInvoiceFormValues, TStaff, TInvoiceItemProps, TProductInCart, DateTimeOptions } from "@/type/type"
import { useRef } from "react"
import { Path, useForm, UseFormRegister, SubmitHandler, FieldErrors } from "react-hook-form"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { useBillingCartStore } from "@/store/billingCartStore"
import { useCreateNew } from "@/hook/management/useAddQuery"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

type InputProps = {
  label: Path<TInvoiceFormValues>
  register: UseFormRegister<TInvoiceFormValues>,
  errors: FieldErrors<TInvoiceFormValues>,
  datas?: (TCustomer | TStaff)[] | undefined,
  required: boolean,
}

const Input = ({ label, register, errors }: InputProps) => {

  const isNumberInput = label === "paymentAmount" || label === "receiveAmount";

  return (
    <div className="flex my-2 items-center justify-between">
      <label className="mb-1 capitalize">{label}</label>
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
    <label className="mb-1 capitalize">{label}</label>
    <div className="flex flex-col">
      <select {...register(label, { required: `${label} is required` })} className="w-64 border border-gray-300 rounded-lg p-2 bg-white">
        <option value="" hidden>{`Select ${label}`}</option>
        {label === "paymentType" ? (
          ['Cash', 'Mobile Payment'].map((data) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))
        ) : (
          datas?.map((data) => {
            let name = ""
            switch (label) {
              case 'customers':
                const customer = data as TCustomer;
                name = customer.customerName;
                break;
              case 'staffs':
                const staff = data as TStaff;
                name = staff.staffName;
                break;
              default:
                break;
            }
            return (
              <option key={data?.id} value={name}>
                {name}
              </option>
            );
          })
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
  const { register, handleSubmit, formState: { errors } } = useForm<TInvoiceFormValues>()
  const ref = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
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
  const orderProducts = useBillingCartStore((state) => state.cart);

  const priceArr = orderProducts?.map((product: TProductInCart) => product?.product.price)
  const subTotal = priceArr.reduce((acc, curr) => acc + curr, 0);

  const totalAmount: number = subTotal - 50
  const currentDate = new Date();

  const options: DateTimeOptions  = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }
  const formattedDateTime = currentDate.toLocaleString('en-US', options).replace(/,/, '');

  const { mutate } = useCreateNew('saleInvoice');

  const onSubmit: SubmitHandler<TInvoiceFormValues> = (data) => {
    const { customers: customerCode, staffs: staffCode, paymentAmount, receiveAmount, ...rest } = data;
    const parsedPaymentAmount = typeof paymentAmount === 'string' ? parseFloat(paymentAmount) : paymentAmount;
    const parsedReceiveAmount = typeof receiveAmount === 'string' ? parseFloat(receiveAmount) : receiveAmount;
    const change = paymentAmount - receiveAmount

    mutate({
      formData: {
        ...rest,
        customerCode,
        staffCode,
        paymentAmount: parsedPaymentAmount,
        receiveAmount: parsedReceiveAmount,
        totalAmount,
        change,
        saleInvoiceDateTime: formattedDateTime,
        'discount': 50,
        'tax': 0.00
      }, route: 'saleInvoice'
    })

    navigate('/sale-invoice/history');
    toast({ description: "Success" })
  }

  const handleSave = () => {
    if (ref.current) {
      handleSubmit(onSubmit)()
    }
  }

  return (
    <div className="w-9/12 mx-auto my-10">

      <div className="flex justify-between items-center">
        <h1 className="text-3xl">New Invoice</h1>
        {
          orderProducts.length !== 0 ? <button className="bg-gray-900 text-white inline-block py-2 px-4 rounded-md" onClick={handleSave}>Save</button> : <></>
        }
      </div>
      <div className="mt-5 bg-gray-100 py-3 px-5 rounded-sm">
        <form className="grid grid-cols-2 gap-x-40" ref={ref}>
          <Input label="voucherNo" register={register} required errors={errors} />
          <Select label="paymentType" register={register} required errors={errors} />
          <Select label="customers" datas={customers} register={register} required errors={errors} />
          <Input label="paymentAmount" register={register} required errors={errors} />
          <Select label="staffs" datas={staffs} register={register} required errors={errors} />
          <Input label="receiveAmount" register={register} required errors={errors} />
        </form>
        {
          orderProducts?.length !== 0 ?
            <>
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
                  {
                    orderProducts?.map((product: TProductInCart, index: number) => {
                      return <TableRow>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{product?.product?.productName}</TableCell>
                        <TableCell>{product?.count}</TableCell>
                        <TableCell>{product?.product?.price}</TableCell>
                        <TableCell className="text-right">{product?.product?.price * product?.count}  MMK</TableCell>
                      </TableRow>
                    }
                    )
                  }
                </TableBody>
              </Table>
              <div className="flex justify-end">
                <div className="w-1/4 flex flex-col gap-2">
                  <InvoiceItem label="Subtotal" value={`${subTotal} MMK`} />
                  <InvoiceItem label="Discount" value="500 MMK" />
                  <InvoiceItem label="Tax" value="0.00" />
                  <div className="w-full h-[1px] bg-gray-300" />
                  <InvoiceItem label="Total" value={`${totalAmount} MMK`} />
                </div>
              </div>
              </>
              : <></>
            }
           
        </div>

    </div>
  )
}

export default SaleInvoice