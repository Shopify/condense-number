export function removeLocaleFromCurrency(currency) {
  if (isOnlyAlpha(currency)) {
    return currency;
  }

  return currency.replace(/^[a-zA-Z]+/g, '');
}

function isOnlyAlpha(str) {
  return /^[a-zA-Z.]+$/.test(str);
}
