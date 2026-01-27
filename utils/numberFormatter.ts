const formatter = new Intl.NumberFormat("en", {
  notation: "compact",
  compactDisplay: "short",
});

const currencyFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
});

export const numberFormatter = (number: number) => {
  return formatter.format(number);
};

export const formatWithComma = (num: number) => {
  return num.toLocaleString("en-US");
};

export const currencyFormat = (num: number) => {
  return currencyFormatter.format(num);
};
