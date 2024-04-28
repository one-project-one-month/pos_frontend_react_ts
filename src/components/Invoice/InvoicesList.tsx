import DataTable from "@/components/ui/DataTable"
import { TInvoice } from "@/type/type"
import { InvoiceColumn } from "@/components/Invoice/InvoiceColumn"
import { useQuery } from "@tanstack/react-query"
import { getInvoices } from "@/services/api/invoiceApi"
import React from "react"
import { DatePicker } from "@/components/Invoice/DateFilter"
import { apiFormattedDate } from "@/lib/utils"
import ListSkeleton from "../Product/ListSekeleton"

interface DateElementsProps {
  fromDate: Date;
  toDate: Date;
  handleStartDateChange: (date: Date) => void;
  handleEndDateChange: (date: Date) => void;
}

const DateElements = ({ fromDate, toDate, handleStartDateChange, handleEndDateChange }: DateElementsProps) => (
  <div className="flex gap-4">
    <div>
      From Date: <DatePicker customDate={fromDate} onSelect={handleStartDateChange} />
    </div>
    <div>
      To Date: <DatePicker customDate={toDate} onSelect={handleEndDateChange} />
    </div>
  </div>
);

const InvoicesList = () => {
  const [fromDate, setFromDate] = React.useState<Date>(new Date(2024, 3, 1));
  const [toDate, setToDate] = React.useState<Date>(new Date());

  const handleStartDateChange = (newDate: Date) => {
    setFromDate(newDate);
  };

  const handleEndDateChange = (newDate: Date) => {
    setToDate(newDate);
  };

  const { data: invoices, isFetched } = useQuery<TInvoice[]>({
    queryKey: ["sale-invoices", apiFormattedDate(fromDate), apiFormattedDate(toDate)],
    queryFn: () => getInvoices({ fromDate: apiFormattedDate(fromDate), toDate: apiFormattedDate(toDate) }),
  });

  return (
    <>
    {
        isFetched ? 
            <DataTable columns={InvoiceColumn} data={invoices ? invoices : []} endPont="sale-invoices" filterField="voucherNo" className="mx-0" pageSize={8} notInclude={true} dates={<DateElements
                fromDate={fromDate}
                toDate={toDate}
                handleStartDateChange={handleStartDateChange}
                handleEndDateChange={handleEndDateChange}
              />} /> : <ListSkeleton />
    }
    </> 
  )
}

export default InvoicesList