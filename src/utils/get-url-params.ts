const getURLParams = (url: URL) => {
  return Object.fromEntries(url.searchParams.entries());
};

export default getURLParams;
