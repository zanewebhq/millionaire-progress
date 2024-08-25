export enum CurrencyOptionCode {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

const currencyOptions = [
  {
    name: 'United States Dollar',
    value: 'USD',
    symbol: '$',
    flag: '🇺🇸',
    label: '🇺🇸 United States Dollar (USD)',
  },
  {
    name: 'Euro',
    value: 'EUR',
    symbol: '€',
    flag: '🇪🇺',
    label: '🇪🇺 Euro (EUR)',
  },
  {
    name: 'Great Britain Pound',
    value: 'GBP',
    symbol: '£',
    flag: '🇬🇧',
    label: '🇬🇧 Great Britain Pound (GBP)',
  },
];

export default currencyOptions;
