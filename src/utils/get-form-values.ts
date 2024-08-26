import { getURLParams, validateParams } from '@utils';

const getFormValues = (url: URL) => {
  const params = getURLParams(url);
  const validParams = validateParams(params);

  return validParams;
};

export default getFormValues;
