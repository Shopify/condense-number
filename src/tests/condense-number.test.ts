import {condenseNumber} from '../condense-number';

describe('condenseNumber()', () => {
  it('does not condense small numbers', () => {
    expect(condenseNumber(10, 'en')).toBe('10');
  });

  it('does not condense numbers when a language does not support it', () => {
    expect(condenseNumber(100000, 'it')).toBe('100.000');
  });

  it('condenses large numbers', () => {
    expect(condenseNumber(1500000, 'en')).toBe('1M');
  });

  it('condenses numbers in locales other than English', () => {
    expect(condenseNumber(1500000, 'de')).toBe(`1 Mio'.'`);
  });

  it('rounds down', () => {
    expect(condenseNumber(1900000, 'es')).toBe('1 M');
  });

  it('includes the provided precision when it is significant', () => {
    expect(condenseNumber(1500000, 'es', 1)).toBe('1,5 M');
  });

  it('does not include the provided precision when it is insignificant', () => {
    expect(condenseNumber(1000000, 'es', 1)).toBe('1 M');
  });

  it('handles negative numbers properly', () => {
    expect(condenseNumber(-150000, 'ja')).toBe('-15万');
  });

  it('uses Intl formatting when the locale is not supported', () => {
    expect(condenseNumber(-150000, 'IN')).toBe('-150.000');
  });

  it('does not apply precision to Intl formatting when the locale is not supported', () => {
    expect(condenseNumber(-150000, 'IN', 2)).toBe('-150.000');
  });
});
