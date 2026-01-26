export default function currencyFormatter(price: number) {
  return new Intl.NumberFormat("pt-BR", 
    {
      currency: "BRL",
      style: "decimal",
      minimumFractionDigits: 2
    }
  ).format(price)
}