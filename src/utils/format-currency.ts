const formatCurrency = (amount: number, currency: string) => {
  const { format } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currencyDisplay: 'code',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return format(amount).replace(/^(-)?([A-Z]{3})\s*(.+)$/, '$1$3 $2');
};

export default formatCurrency;
