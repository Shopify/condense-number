# condense-number

Locale-aware number and currency condensing

`condense-number` uses [Unicode Common Locle Data Repository (CLDR)](http://cldr.unicode.org/) and [Intl.js](https://github.com/andyearnshaw/Intl.js) formatting patterns to inform locale-aware number and currency condensing. What does number condensing mean? In English 50,000 condenses to 50K, but it's 50 mil in Portuguese and 5 万 in Japanese.

The following locales are now available in `condense-number`: English (en), Danish (da), Dutch (nl), French (fr), German (de), Hindi (hi), Italian (it), Japanese (ja), Brazilian Portuguese (pt-BR), Russian (ru) and Spanish (es).

### How to use

### condenseNumber

Provide a number and locale, get the condensed value. If a condensed value isn't applicable, `condenseNumber` returns the number with formatting, if appropriate.

Example:

`condenseNumber(1000, 'en')`
= `'1K'`

Optionally, provide a third parameter, which is a number and overrides the default decimal precision of 0.

`condenseNumber(1500, 'en', 1)`
= `'1.5K'`

### condenseCurrency

Provide a number, locale and currency code, get the value with the currency provided, formatted according to the locale's standards. If a condensing isn't applicable, `condenseCurrency` returns the currency with formatting, but without condensing.

`condenseCurrency(15000, 'en', 'usd')` = `'$15K'`;

Optionally, provide a fourth parameter, which is a number and overrides the default decimal precision of 0.

`condenseCurrency(1500, 'en', 'gbp', 1)` = `'£1.5K'`

When a currency symbol is not found, the capitalized currency code will be used instead. For example:

`condenseCurrency(150000, 'en', 'abc')` = `'ABC150K'`

### How it works

If you're curious, have a look at the [CLDR data](https://github.com/unicode-cldr/cldr-numbers-modern) used under the hood. The logic we apply to the JSON is informed by documentation ([here](http://www.unicode.org/reports/tr35/tr35-29.html#Number_Format_Patterns) and [here](http://unicode.org/reports/tr35/tr35-numbers.html)) from Unicode. We use [Intl.js](https://github.com/andyearnshaw/Intl.js), which also relies on CLDR data, to inform our currency codes and number patterns.
