import validateParams from './validate-params';

const defaultValues = {
  currency: 'USD',
  netWorth: '1000',
};

test('returns passed params if valid or default values if params invalid', () => {
  expect(validateParams(defaultValues)).toEqual(defaultValues);

  expect(
    validateParams({
      currency: 'EUR',
      netWorth: '5500',
    }),
  ).toEqual({
    currency: 'EUR',
    netWorth: '5500',
  });

  expect(
    validateParams({
      currency: 'XYZ123',
      netWorth: '1250',
    }),
  ).toEqual({
    currency: defaultValues.currency,
    netWorth: '1250',
  });

  expect(
    validateParams({
      currency: 'GBP',
      netWorth: 'cxzkjvl',
    }),
  ).toEqual({
    currency: 'GBP',
    netWorth: defaultValues.netWorth,
  });
});
