import exchangeRatesUSD from '@data/exchange-rates-USD.json';
import currencies from '@data/currencies.json';
import currencyFlags from '@constants/currency-flags';

const ONE_MILLION = 1000000;

export interface ResultRow {
  name: string;
  code: string;
  flag: string;
  rate: number;
  amount: number;
  difference: number;
  millionAmount: number;
  isOverMillion: boolean;
}

const getResults = (
  exchangeRates: typeof exchangeRatesUSD.data,
  netWorth: number,
) => {
  const exchangeRateKeys = Object.keys(
    exchangeRates,
  ) as unknown as (keyof typeof exchangeRates)[];

  const sortedExchangeRateKeys = exchangeRateKeys.sort(
    (a, b) => exchangeRates[b].value - exchangeRates[a].value,
  );

  const overMillionResults: ResultRow[] = [];
  const underMillionResults: ResultRow[] = [];

  const results = sortedExchangeRateKeys.map((key) => {
    const currency = currencies.data[key];
    const rate = exchangeRates[key].value;
    const amount = netWorth * rate;
    const millionAmount = ONE_MILLION / rate;
    const isOverMillion = amount > ONE_MILLION;

    const result: ResultRow = {
      name: currency.name,
      code: currency.code,
      flag: currencyFlags[key as keyof typeof currencyFlags] || '',
      rate,
      amount,
      difference: (amount - ONE_MILLION) / rate,
      millionAmount,
      isOverMillion,
    };

    if (isOverMillion) {
      overMillionResults.push(result);
    } else {
      underMillionResults.push(result);
    }

    return result;
  });

  return { results, overMillionResults, underMillionResults };
};

export default getResults;
