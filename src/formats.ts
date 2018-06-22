type SupportedLocaleSymbolSet = 'latn';

interface LocaleSymbols {
  decimal: string;
  group: string;
  minusSign: string;
}

const symbols: {[key: string]: LocaleSymbols} = {
  latn: {
    group: ',',
    decimal: '.',
    minusSign: '-',
  },
};

interface Format {
  number: {
    patterns: {
      decimal: {
        positivePattern: string;
        negativePattern: string;
      };
      currency: {
        positivePattern: string;
        negativePattern: string;
      };
    };
    symbols: SupportedLocaleSymbolSet;
  };
  condensePatterns: {
    [key: string]: string;
  };
}

enum SupportedLocale {
  English = 'en',
  German = 'de',
  Portugese = 'pt-BR',
  Italian = 'it',
  Spanish = 'es',
  Japanese = 'ja',
  French = 'fr',
}

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return Object.values(SupportedLocale).indexOf(locale) !== -1;
}

const formats: {[key in SupportedLocale]: Format} = {
  en: {
    number: {
      patterns: {
        decimal: {
          positivePattern: '{number}',
          negativePattern: '{minusSign}{number}',
        },
        currency: {
          positivePattern: '{currency}{number}',
          negativePattern: '{minusSign}{currency}{number}',
        },
      },
      symbols: 'latn',
    },
    condensePatterns: {
      '1000-count-other': '0K',
      '10000-count-other': '00K',
      '100000-count-other': '000K',
      '1000000-count-other': '0M',
      '10000000-count-other': '00M',
      '100000000-count-other': '000M',
      '1000000000-count-other': '0B',
      '10000000000-count-other': '00B',
      '100000000000-count-other': '000B',
      '1000000000000-count-other': '0T',
      '10000000000000-count-other': '00T',
      '100000000000000-count-other': '000T',
    },
  },
  de: {
    number: {
      patterns: {
        decimal: {
          positivePattern: '{number}',
          negativePattern: '{minusSign}{number}',
        },
        currency: {
          positivePattern: '{number} {currency}',
          negativePattern: '{minusSign}{number} {currency}',
        },
      },
      symbols: 'latn',
    },
    condensePatterns: {
      '1000-count-other': '0',
      '10000-count-other': '0',
      '100000-count-other': '0',
      '1000000-count-other': "0 Mio'.'",
      '10000000-count-other': "00 Mio'.'",
      '100000000-count-other': "000 Mio'.'",
      '1000000000-count-other': "0 Mrd'.'",
      '10000000000-count-other': "00 Mrd'.'",
      '100000000000-count-other': "000 Mrd'.'",
      '1000000000000-count-other': "0 Bio'.'",
      '10000000000000-count-other': "00 Bio'.'",
      '100000000000000-count-other': "000 Bio'.'",
    },
  },
  'pt-BR': {
    number: {
      patterns: {
        decimal: {
          positivePattern: '{number}',
          negativePattern: '{minusSign}{number}',
        },
        currency: {
          positivePattern: '{currency}{number}',
          negativePattern: '{minusSign}{currency}{number}',
        },
      },
      symbols: 'latn',
    },
    condensePatterns: {
      '1000-count-other': '0 mil',
      '10000-count-other': '00 mil',
      '100000-count-other': '000 mil',
      '1000000-count-other': '0 mi',
      '10000000-count-other': '00 mi',
      '100000000-count-other': '000 mi',
      '1000000000-count-other': '0 bi',
      '10000000000-count-other': '00 bi',
      '100000000000-count-other': '000 bi',
      '1000000000000-count-other': '0 tri',
      '10000000000000-count-other': '00 tri',
      '100000000000000-count-other': '000 tri',
    },
  },
  es: {
    number: {
      patterns: {
        decimal: {
          positivePattern: '{number}',
          negativePattern: '{minusSign}{number}',
        },
        currency: {
          positivePattern: '{number} {currency}',
          negativePattern: '{minusSign}{number} {currency}',
        },
      },
      symbols: 'latn',
    },
    condensePatterns: {
      '1000-count-other': '0 mil',
      '10000-count-other': '00 mil',
      '100000-count-other': '000 mil',
      '1000000-count-other': '0 M',
      '10000000-count-other': '00 M',
      '100000000-count-other': '000 M',
      '1000000000-count-other': '0000 M',
      '10000000000-count-other': '00 mil M',
      '100000000000-count-other': '000 mil M',
      '1000000000000-count-other': '0 B',
      '10000000000000-count-other': '00 B',
      '100000000000000-count-other': '000 B',
    },
  },
  ja: {
    number: {
      patterns: {
        decimal: {
          positivePattern: '{number}',
          negativePattern: '{minusSign}{number}',
        },
        currency: {
          positivePattern: '{currency}{number}',
          negativePattern: '{minusSign}{currency}{number}',
        },
      },
      symbols: 'latn',
    },
    condensePatterns: {
      '1000-count-other': '0',
      '10000-count-other': '0万',
      '100000-count-other': '00万',
      '1000000-count-other': '000万',
      '10000000-count-other': '0000万',
      '100000000-count-other': '0億',
      '1000000000-count-other': '00億',
      '10000000000-count-other': '000億',
      '100000000000-count-other': '0000億',
      '1000000000000-count-other': '0兆',
      '10000000000000-count-other': '00兆',
      '100000000000000-count-other': '000兆',
    },
  },
  fr: {
    number: {
      patterns: {
        decimal: {
          positivePattern: '{number}',
          negativePattern: '{minusSign}{number}',
        },
        currency: {
          positivePattern: '{number} {currency}',
          negativePattern: '{minusSign}{number} {currency}',
        },
      },
      symbols: 'latn',
    },
    condensePatterns: {
      '1000-count-other': '0 k',
      '10000-count-other': '00 k',
      '100000-count-other': '000 k',
      '1000000-count-other': '0 M',
      '10000000-count-other': '00 M',
      '100000000-count-other': '000 M',
      '1000000000-count-other': '0 Md',
      '10000000000-count-other': '00 Md',
      '100000000000-count-other': '000 Md',
      '1000000000000-count-other': '0 Bn',
      '10000000000000-count-other': '00 Bn',
      '100000000000000-count-other': '000 Bn',
    },
  },
  it: {
    number: {
      patterns: {
        decimal: {
          positivePattern: '{number}',
          negativePattern: '{minusSign}{number}',
        },
        currency: {
          positivePattern: '{number} {currency}',
          negativePattern: '{minusSign}{number} {currency}',
        },
      },
      symbols: 'latn',
    },
    condensePatterns: {
      '1000-count-other': '0',
      '10000-count-other': '0',
      '100000-count-other': '0',
      '1000000-count-other': '0 Mln',
      '10000000-count-other': '00 Mln',
      '100000000-count-other': '000 Mln',
      '1000000000-count-other': '0 Mld',
      '10000000000-count-other': '00 Mld',
      '100000000000-count-other': '000 Mld',
      '1000000000000-count-other': '0 Bln',
      '10000000000000-count-other': '00 Bln',
      '100000000000000-count-other': '000 Bln',
    },
  },
};

export {symbols, formats};
