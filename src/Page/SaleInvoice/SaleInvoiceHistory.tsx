import InvoicesList from "@/components/Invoice/InvoicesList"

const SaleInvoiceHistory = () => {
  return (
    <section className={"mx-8"}>
      <h1 className={"my-4 text-tertiary dark:text-dark-tertiary font-bold text-xl"}>Sale Invoices</h1>
      <InvoicesList />
    </section>
  )
}

export default SaleInvoiceHistory