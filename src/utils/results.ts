import type { AstroGlobal } from 'astro';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import exchangeRatesEUR from '@data/exchange-rates-EUR.json';
import exchangeRatesGBP from '@data/exchange-rates-GBP.json';
import exchangeRatesUSD from '@data/exchange-rates-USD.json';
import { CurrencyOptionCode } from '@constants/currencies';
import currencies from '@data/currencies.json';
import currencyFlags from '@constants/currency-flags';

const ONE_MILLION = 1000000;

export const getFormValues = (
  Astro: Readonly<
    AstroGlobal<
      Record<string, any>,
      AstroComponentFactory,
      Record<string, string | undefined>
    >
  >,
) => {
  let currency = CurrencyOptionCode.USD;
  let netWorth = 0;

  const currencyParam = Astro.url.searchParams.get(
    'currency',
  ) as CurrencyOptionCode;
  const netWorthParam = Astro.url.searchParams.get('net-worth') || '0';
  const parsedNetWorth = parseFloat(netWorthParam);

  if (Object.values(CurrencyOptionCode).includes(currencyParam)) {
    currency = currencyParam;
  }

  if (!isNaN(parsedNetWorth)) {
    netWorth = parsedNetWorth;
  }

  return { currency, netWorth };
};

export const getExchangeRates = (currency: CurrencyOptionCode) => {
  switch (currency) {
    case CurrencyOptionCode.EUR:
      return exchangeRatesEUR.data;
    case CurrencyOptionCode.GBP:
      return exchangeRatesGBP.data;
    case CurrencyOptionCode.USD:
      return exchangeRatesUSD.data;
  }
};

export interface ResultRow {
  name: string;
  code: string;
  flag: string;
  rate: number;
  amount: number;
  difference: number;
  millionAmountToUSD: number;
  isOverMillion: boolean;
}

export const getResults = (
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
    const millionAmountToUSD = ONE_MILLION / rate;
    const isOverMillion = amount > ONE_MILLION;

    const result: ResultRow = {
      name: currency.name,
      code: currency.code,
      flag: currencyFlags[key],
      rate,
      amount,
      difference: (amount - ONE_MILLION) / rate,
      millionAmountToUSD,
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
