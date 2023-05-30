import {removeLocaleFromCurrency} from '../remove-locale-from-currency';

describe('removeLocaleFromCurrency()', () => {
  it.each([
    ['AU$', '$'],
    ['R$', '$'],
    ['CA$', '$'],
    ['CN¥', '¥'],
    ['kr.', 'kr.'],
    ['€', '€'],
    ['£', '£'],
    ['HK$', '$'],
    ['₪', '₪'],
    ['₹', '₹'],
    ['JP¥', '¥'],
    ['₩', '₩'],
    ['MX$', '$'],
    ['NZ$', '$'],
    ['฿', '฿'],
    ['NT$', '$'],
    ['$', '$'],
    ['₫', '₫'],
    ['FCFA', 'FCFA'],
    ['EC$', '$'],
    ['CFA', 'CFA'],
    ['CFPF', 'CFPF'],
  ])('formats %s to %s', (string, expected) => {
    const actual = removeLocaleFromCurrency(string);

    expect(actual).toEqual(expected);
  });
});
