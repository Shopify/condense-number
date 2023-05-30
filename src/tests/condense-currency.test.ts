import {condenseCurrency} from '../condense-currency';

describe('condenseCurrency()', () => {
  it('adds currency symbol but does not condense small numbers', () => {
    expect(condenseCurrency(10, 'en', 'usd')).toBe('$10');
  });

  it('adds currency symbol and condenses large numbers', () => {
    expect(condenseCurrency(15000, 'en', 'usd')).toBe('$15K');
  });

  it('adds currency symbol and condenses large numbers for non-USD currencies', () => {
    expect(condenseCurrency(15000, 'en', 'EUR')).toBe('€15K');
  });

  it('adds currency symbol and condenses large numbers in non-English locales', () => {
    expect(condenseCurrency(15000, 'es', 'usd')).toBe('15 mil $');
  });

  it('adds currency symbol and condenses large numbers in non-English locales and non-USD currencies', () => {
    expect(condenseCurrency(15000, 'pt-BR', 'JPY')).toBe('JP¥15 mil');
  });

  it('condenses numbers to the provided precision', () => {
    expect(condenseCurrency(1500, 'en', 'gbp', {maxPrecision: 1})).toBe(
      '£1.5K',
    );
  });

  it('rounds down by default', () => {
    expect(condenseCurrency(1500, 'en', 'gbp')).toBe('£1K');
  });

  it('rounds up if specified', () => {
    expect(condenseCurrency(1500, 'en', 'gbp', {roundingRule: 'up'})).toBe(
      '£2K',
    );
  });

  it('rounds automatically if specified', () => {
    expect(condenseCurrency(1500, 'en', 'gbp', {roundingRule: 'up'})).toBe(
      '£2K',
    );
  });

  it('handles negative numbers properly', () => {
    expect(condenseCurrency(-15000, 'ja', 'CAD')).toBe('−CA$1万');
  });

  it('uses Intl formatting when the locale is not supported', () => {
    expect(condenseCurrency(150000, 'IN', 'USD')).toBe('US$150.000,00');
  });

  it('falls back to the capitalized currency code when a currency symbol is not found', () => {
    expect(condenseCurrency(150000, 'en', 'abc')).toBe('ABC150K');
  });

  it('supports locales with a region locale code', () => {
    expect(condenseCurrency(150000, 'en-CA', 'CAD')).toBe('CA$150K');
  });

  it('does not apply precision to Intl formatting when the locale is not supported', () => {
    expect(condenseCurrency(150000, 'zzz', 'CAD', {maxPrecision: 1})).toBe(
      'CA$150,000.00',
    );
  });

  describe('options.addLocaleToCurrency', () => {
    it('applies locale to currency when true', () => {
      expect(condenseCurrency(10000, 'en', 'CAD')).toBe('CA$10K');
    });

    it.only('does not apply locale to currency when false', () => {
      const options = {
        addLocaleToCurrency: false,
      };

      expect(condenseCurrency(10000, 'en', 'CAD', options)).toBe('$10K');
    });
  });
});
