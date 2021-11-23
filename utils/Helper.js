export const fetchData = async (url, { body, method, headers } = {}) => {
  try {
    const promise = await fetch(url, { body, method, headers });
    const data = await promise.json();
    return [data, null];
  } catch (e) {
    return [null, e];
  }
};

export const currencyFormat = function currencyFormat(num) {
  const numberFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const price = numberFormat.format(num);
  return price.split(",")[0];
};
