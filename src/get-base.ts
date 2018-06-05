export function getBase(value: number) {
  if (value > 99999999999999) {
    return 100000000000000;
  } else if (value > 9999999999999) {
    return 10000000000000;
  } else if (value > 999999999999) {
    return 1000000000000;
  } else if (value > 99999999999) {
    return 100000000000;
  } else if (value > 9999999999) {
    return 10000000000;
  } else if (value > 999999999) {
    return 1000000000;
  } else if (value > 99999999) {
    return 100000000;
  } else if (value > 9999999) {
    return 10000000;
  } else if (value > 999999) {
    return 1000000;
  } else if (value > 99999) {
    return 100000;
  } else if (value > 9999) {
    return 10000;
  } else if (value > 999) {
    return 1000;
  } else {
    return 0;
  }
}
