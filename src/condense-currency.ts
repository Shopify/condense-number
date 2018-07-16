import {formats, symbols, isSupportedLocale} from './formats';
import {condenseNumberToParts, RoundingRule} from './condense-number-to-parts';

interface Options {
  maxPrecision: number;
  roundingRule: RoundingRule;
}

export function condenseCurrency(
  value: number,
  locale: string,
  currencyCode: string,
  options: Partial<Options> = {},
) {
  const {maxPrecision = 0, roundingRule = 'down'} = options;

  if (!isSupportedLocale(locale)) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    }).format(value);
  }

  const {sign, number, abbreviation} = condenseNumberToParts(
    value,
    locale,
    maxPrecision,
    roundingRule,
  );

  const localeInfo = formats[locale];
  const currencyFormatsForLocale = localeInfo.number.patterns.currency;

  const symbolsForLocale = symbols[localeInfo.number.symbols];

  const normalizedCurrencyCode = currencyCode.toUpperCase();
  const currencySymbol =
    localeInfo.number.currencies[normalizedCurrencyCode] ||
    normalizedCurrencyCode;

  const resolvedNumber = `${number}${abbreviation}`;

  if (sign === '-') {
    const {negativePattern} = currencyFormatsForLocale;

    return negativePattern
      .replace('{minusSign}', symbolsForLocale.minusSign)
      .replace('{currency}', currencySymbol)
      .replace('{number}', resolvedNumber);
  } else {
    const {positivePattern} = currencyFormatsForLocale;

    return positivePattern
      .replace('{currency}', currencySymbol)
      .replace('{number}', resolvedNumber);
  }
}
