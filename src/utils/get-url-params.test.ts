import getURLParams from './get-url-params';

test('returns params from url in key-value pairs', () => {
  const url = new URL('http://localhost:3000/?currency=USD&netWorth=10000');

  expect(getURLParams(url)).toEqual({
    currency: 'USD',
    netWorth: '10000',
  });
});
