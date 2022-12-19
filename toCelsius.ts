const withPrecision = (n: number, precision: number) =>
  Number(n.toFixed(precision));

export function toCelsius(input?: any, precision = 2, unit: "k" | "f" = "f") {
  const num = parseFloat(input);
  if (isNaN(num)) return null;
  if (unit === "k") return withPrecision(num - 273.15, precision);
  return withPrecision((num - 32) * (5 / 9), precision);
}
