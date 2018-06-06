export function setPrecision(value: number, precision: number) {
  const precisionMultiplier = Math.pow(10, precision);

  return Math.floor(value * precisionMultiplier) / precisionMultiplier;
}
