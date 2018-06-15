import {condenseNumber} from '../condense-number';

describe('condenseNumber()', () => {
  it('does not condense small numbers', () => {
    expect(condenseNumber(10, 'en')).toBe('10');
  });

  it.skip('does not condense numbers when a language does not support it', () => {
    expect(condenseNumber(100000, 'it')).toBe('100.000');
  });

  it('condenses large numbers', () => {
    expect(condenseNumber(1500000, 'en')).toBe('1M');
  });

  it('condenses numbers in locales other than English', () => {
    expect(condenseNumber(1500000, 'de')).toBe(`1 Mio'.'`);
  });

  it.skip('condenses numbers to the provided precision', () => {
    expect(condenseNumber(1500000, 'es', 1)).toBe('1,5 M');
  });

  it.skip('handles negative numbers properly', () => {
    expect(condenseNumber(-150000, 'ja')).toBe('-15万');
  });

  it.skip('uses Intl formatting when the locale is not supported', () => {
    expect(condenseNumber(-150000, 'IN')).toBe('-150.000');
  });

  it.skip('applies precision to Intl formatting when the locale is not supported', () => {
    expect(condenseNumber(-150000, 'IN', 2)).toBe('-150.000,00');
  });
});
