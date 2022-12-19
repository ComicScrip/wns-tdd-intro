const getPrecision = (n: number, precision: number) =>
  Number(n.toFixed(precision));

export function toCelcius(n?: any, precision = 2, unit: "k" | "f" = "f") {
  const number = parseFloat(n);
  if (isNaN(number)) return null;
  if (unit === "k") return getPrecision(n - 273.15, precision);
  return getPrecision(((number - 32) * 5) / 9, precision);
}
