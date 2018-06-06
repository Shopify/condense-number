import {condenseNumber} from '../condense-number';

describe('condenseNumber()', () => {
  it('does not condense small numbers', () => {
    expect(condenseNumber(10, 'en')).toBe('10');
  });

  it('condenses large numbers', () => {
    expect(condenseNumber(1500000, 'en')).toBe('1M');
  });

  it('condenses numbers in locales other than English', () => {
    expect(condenseNumber(1500000, 'de')).toBe(`1 Mio'.'`);
  });

  it('condenses numbers to the provided precision', () => {
    expect(condenseNumber(1500000, 'es', 1)).toBe('1,5 M');
  });

  it('handles negative numbers properly', () => {
    expect(condenseNumber(-150000, 'ja')).toBe('-15万');
  });
});
