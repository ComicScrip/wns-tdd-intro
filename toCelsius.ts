export function toCelsius(input: any) {
  const n = parseInt(input);
  if (isNaN(n)) return null;
  return ((n - 32) * 5) / 9;
}
