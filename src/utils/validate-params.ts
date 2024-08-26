import { CurrencyOptionCode } from '@constants/currencies';

const validateParams = (params: { [k: string]: string }) => {
  const validParams = {
    currency: CurrencyOptionCode.USD,
    netWorth: '1000',
  };

  if (params.currency in CurrencyOptionCode) {
    validParams.currency = params.currency as CurrencyOptionCode;
  }

  if (!isNaN(parseInt(params.netWorth))) {
    validParams.netWorth = params.netWorth;
  }

  return {
    currency: validParams.currency,
    netWorth: parseInt(validParams.netWorth),
  };
};

export default validateParams;
