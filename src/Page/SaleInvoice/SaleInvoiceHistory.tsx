import InvoicesList from "@/components/Invoice/InvoicesList"

const SaleInvoiceHistory = () => {
  return (
    <section className={"m-8"}>
      <h1 className={"mx-8 mb-8 text-cyan-900 font-bold text-xl"}>Sale Invoices</h1>
      <InvoicesList />
    </section>
  )
}

export default SaleInvoiceHistory