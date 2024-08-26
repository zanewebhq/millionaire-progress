import { CurrencyOptionCode } from '@constants/currencies';
import exchangeRatesEUR from '@data/exchange-rates-EUR.json';
import exchangeRatesGBP from '@data/exchange-rates-GBP.json';
import exchangeRatesUSD from '@data/exchange-rates-USD.json';
import getExchangeRates from './get-exchange-rates';

test('returns exchange rate data for base currency', () => {
  expect(getExchangeRates(CurrencyOptionCode.EUR)).toEqual(
    exchangeRatesEUR.data,
  );
  expect(getExchangeRates(CurrencyOptionCode.GBP)).toEqual(
    exchangeRatesGBP.data,
  );
  expect(getExchangeRates(CurrencyOptionCode.USD)).toEqual(
    exchangeRatesUSD.data,
  );
});
