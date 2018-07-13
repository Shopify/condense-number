import {setPrecision} from '../set-precision';

describe('setPrecision()', () => {
  it('rounds up', () => {
    const actual = setPrecision(10.5, 0, 'up');
    expect(actual).toEqual(11);
  });

  it('rounds down', () => {
    const actual = setPrecision(10.5, 0, 'down');
    expect(actual).toEqual(10);
  });

  it('rounds down when rounding is "auto" the lower number is closest', () => {
    const actual = setPrecision(10.2, 0, 'auto');
    expect(actual).toEqual(10);
  });

  it('rounds up when rounding is "auto" the higher number is closest', () => {
    const actual = setPrecision(10.7, 0, 'auto');
    expect(actual).toEqual(11);
  });

  it('sets precision', () => {
    const actual = setPrecision(10.518, 1, 'down');
    expect(actual).toEqual(10.5);
  });

  it('sets precision and rounds', () => {
    const actual = setPrecision(10.989, 2, 'auto');
    expect(actual).toEqual(10.99);
  });
});
