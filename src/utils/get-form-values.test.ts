import getFormValues from './get-form-values';

const defaultValues = {
  currency: 'USD',
  netWorth: 1000,
};

test('returns form values from query params as an object', () => {
  const validURL = new URL('http://localhost:3000/?currency=GBP&netWorth=9849');
  const invalidURL1 = new URL(
    'http://localhost:3000/?currency=asdf&netWorth=asdf',
  );
  const invalidURL2 = new URL('http://localhost:3000/');

  expect(getFormValues(validURL)).toEqual({
    currency: 'GBP',
    netWorth: 9849,
  });

  expect(getFormValues(invalidURL1)).toEqual(defaultValues);

  expect(getFormValues(invalidURL2)).toEqual(defaultValues);
});
