import exchangeRatesEUR from '@data/exchange-rates-EUR.json';
import exchangeRatesGBP from '@data/exchange-rates-GBP.json';
import exchangeRatesUSD from '@data/exchange-rates-USD.json';
import { CurrencyOptionCode } from '@constants/currencies';

const getExchangeRates = (currency: CurrencyOptionCode) => {
  switch (currency) {
    case CurrencyOptionCode.EUR:
      return exchangeRatesEUR.data;
    case CurrencyOptionCode.GBP:
      return exchangeRatesGBP.data;
    case CurrencyOptionCode.USD:
      return exchangeRatesUSD.data;
  }
};

export default getExchangeRates;
