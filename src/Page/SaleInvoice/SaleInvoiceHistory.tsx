import DataTable from "@/components/ui/DataTable"
import { TInvoice } from "@/type/type"
import { InvoiceColumn } from "@/components/Invoice/InvoiceColumn"
import { useQuery } from "@tanstack/react-query"
import { getInvoices } from "@/services/api/invoiceApi"

const SaleInvoiceHistory = () => {
  const { data: invoices } = useQuery<TInvoice[]>({
    queryKey: ["sale-invoices"],
    queryFn: () => getInvoices({month: '04'}),
});

console.log(invoices);

  return (
    <DataTable columns={InvoiceColumn} data={invoices ? invoices : []} endPont="sale-invoices" filterField="voucherNo" notInclude={true} />
  )
}

export default SaleInvoiceHistory