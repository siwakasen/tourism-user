export function formatCurrency(
  amount: number,
  currency: 'USD' | 'USD' | 'EUR' | 'JPY'
): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency,
  };

  if (currency === 'USD') {
    options.minimumFractionDigits = 0;
    options.maximumFractionDigits = 0;
  }

  return new Intl.NumberFormat('en-US', options).format(amount);
}
