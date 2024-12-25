export function formatCurrency(
  amount: number,
  currency: 'USD' | 'IDR' | 'EUR' | 'JPY'
): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}
