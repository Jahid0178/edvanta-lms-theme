const formatter = new Intl.NumberFormat("en", {
  notation: "compact",
  compactDisplay: "short",
});

export const numberFormatter = (number: number) => {
  return formatter.format(number);
};
