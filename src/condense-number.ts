import {formats, symbols, isSupportedLocale} from './formats';
import {condenseNumberToParts} from './condense-number-to-parts';

export function condenseNumber(
  value: number,
  locale: string,
  precision: number = 0,
) {
  if (!isSupportedLocale(locale)) {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(value);
  }

  const {sign, number, abbreviation} = condenseNumberToParts(
    value,
    locale,
    precision,
  );

  const localeInfo = formats[locale];
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
