import {RoundingRule} from './condense-number-to-parts';

export function setPrecision(
  value: number,
  maxPrecision: number,
  roundingRule: RoundingRule,
) {
  const precisionMultiplier = Math.pow(10, maxPrecision);
  switch (roundingRule) {
    case 'up':
      return Math.ceil(value * precisionMultiplier) / precisionMultiplier;
    case 'down':
      return Math.floor(value * precisionMultiplier) / precisionMultiplier;
    case 'auto':
      return Math.round(value * precisionMultiplier) / precisionMultiplier;
    default:
      throw new Error(`Unable to parse rounding rule: '${roundingRule}'`);
  }
}
