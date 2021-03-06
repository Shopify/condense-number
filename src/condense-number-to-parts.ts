import {formats, isSupportedLocale} from './formats';
import {getBase} from './get-base';
import {setPrecision} from './set-precision';

export type RoundingRule = 'up' | 'down' | 'auto';

interface CondensedNumberParts {
  sign: '-' | '';
  number: string;
  abbreviation: string;
}

export function condenseNumberToParts(
  rawValue: number,
  locale: string,
  maxPrecision: number,
  roundingRule: RoundingRule,
): CondensedNumberParts {
  const sign = rawValue < 0 ? '-' : '';
  const value = Math.abs(rawValue);
  const base = getBase(value);

  if (base === 0 || !isSupportedLocale(locale)) {
    return {sign, number: value.toLocaleString(locale), abbreviation: ''};
  }

  const localeInfo = formats[locale];
  const condenseFormatsForLocale = localeInfo.condensePatterns;
  const condenseFormat = condenseFormatsForLocale[`${base}-count-other`];

  if (condenseFormat === '0') {
    return {sign, number: value.toLocaleString(locale), abbreviation: ''};
  }

  const zerosToRemove = condenseFormat.split('0').length - 2;
  const divideBy = base / Math.pow(10, zerosToRemove);

  const number = setPrecision(
    value / Number(divideBy),
    maxPrecision,
    roundingRule,
  );

  const formattedNumber = number.toLocaleString(locale);
  const abbreviation = condenseFormat.replace(/^0+/, '');

  return {sign, number: formattedNumber, abbreviation};
}
