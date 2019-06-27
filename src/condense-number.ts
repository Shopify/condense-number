import {formats, symbols, getSafeLocaleFormat} from './formats';
import {condenseNumberToParts, RoundingRule} from './condense-number-to-parts';

interface Options {
  maxPrecision: number;
  roundingRule: RoundingRule;
}

export function condenseNumber(
  value: number,
  locale: string,
  options: Partial<Options> = {},
) {
  const {maxPrecision = 0, roundingRule = 'down'} = options;
  const safeLocale = getSafeLocaleFormat(locale);

  if (safeLocale == null) {
    return new Intl.NumberFormat(locale).format(value);
  }

  const {sign, number, abbreviation} = condenseNumberToParts(
    value,
    safeLocale,
    maxPrecision,
    roundingRule,
  );

  const localeInfo = formats[safeLocale];
  const numberFormatsForLocale = localeInfo.number.patterns.decimal;

  const symbolsForLocale = symbols[localeInfo.number.symbols];

  if (sign === '-') {
    const {negativePattern} = numberFormatsForLocale;

    return negativePattern
      .replace('{minusSign}', symbolsForLocale.minusSign)
      .replace('{number}', `${number}${abbreviation}`);
  } else {
    const {positivePattern} = numberFormatsForLocale;

    return positivePattern.replace('{number}', `${number}${abbreviation}`);
  }
}
