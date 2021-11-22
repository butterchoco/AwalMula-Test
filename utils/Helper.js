export const fetchData = async (url, options) => {
  try {
    const promise = await fetch(url, options);
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
