// Format number to currency
export const fCurrency = (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'BDT',
  })
}
