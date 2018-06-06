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
    expect(condenseCurrency(15000, 'pt', 'JPY')).toBe('JP¥15 mil');
  });

  it('condenses numbers to the provided precision', () => {
    expect(condenseCurrency(1500, 'en', 'gbp', 1)).toBe('£1.5K');
  });

  it('handles negative numbers properly', () => {
    expect(condenseCurrency(-15000, 'ja', 'CAD')).toBe('-CA$1万');
  });
});
