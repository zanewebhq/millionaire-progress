import formatCurrency from './format-currency';

test('converts amount and currency into money format value', () => {
  expect(formatCurrency(2830, 'EUR')).toEqual('2,830 EUR');
});
