
import Compressor from 'compressorjs';
import Cookies from 'js-cookie';

import blobToBase64 from '@/utils/helpers/imageToBase64';

export const a11yProps = (index, idTab = 'tab', tabName = 'tabpanel') => ({
  id: `${idTab}-${index}`,
  'aria-controls': `${tabName}-${index}`,
});

export const getInitial = (string) => {
  let initials = '';
  if (string) {
    const names = string.split(' ');
    initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    } else {
      initials += names[0].substring(1, 1).toUpperCase();
    }
  }
  return initials;
};

export const decimalNumber = (nominal, afterComma) => {
  const data = Number(nominal).toFixed(afterComma);

  return data.toString();
};

export const getSymbol = (currency, language, isValas = false) => {
  switch (currency) {
    case 'IDR':
      return isValas ? 'IDR' : language === 'id' ? 'Rp' : 'Rp';
    case 'USD':
      return 'USD';
    case 'SGD':
      return 'SGD';
    case 'AUD':
      return 'AUD';
    case 'GBP':
      return 'GBP';
    case 'JPY':
      return 'JPY';
    case 'EUR':
      return 'EUR';
    case 'CHF':
      return 'CHF';
    case 'CAD':
      return 'CAD';
    case 'NZD':
      return 'NZD';
    case 'HKD':
      return 'HKD';
    case 'CNY':
      return 'CNY';
    case 'THB':
      return 'THB';
    default:
      return currency;
  }
};

export const getTimeMilliseconds = () => {
  const newDate = new Date();
  return newDate.getTime();
};

export const UpperCaseFirstLetter = (str) => {
  if (str !== undefined) {
    return str.replace(/\w\S*/g, (txt) => {
      if (txt !== undefined) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
      return '';
    });
  }
  return '';
};

export const formatMoneyRMG = (
  amount = '0',
  currency = 'IDR',
  language = 'id',
  isValas = false
) => {
  const symbol = getSymbol(currency, language, isValas);
  const numberString = amount?.toString() || '';
  if (!numberString) {
    return numberString;
  }
  const split = numberString.split('.');
  let decimal = split[1];
  const formatted = split[0].replace(/(\d)(?=(\d{3})+$)/g, '$&.');

  if (decimal === undefined) {
    decimal = '00';
  } else if (decimal[1] === undefined) {
    decimal = `${decimal}0`;
  }
  return `${symbol} ${formatted},${decimal}`;
};

export const helperMoneySymbol = (amount = '0', symbol = '') => {
  const numberString = amount?.toString() || '';
  if (!numberString) {
    return numberString;
  }
  const split = numberString.split('.');
  let decimal = split[1];
  const formatted = split[0].replace(/(\d)(?=(\d{3})+$)/g, '$&.');

  if (decimal === undefined) {
    decimal = '00';
  } else if (decimal[1] === undefined) {
    decimal = `${decimal}0`;
  }
  return `${symbol} ${formatted},${decimal}`;
};

export const helperMoneySymbolWithoutDecimal = (amount = '0', symbol = '') => {
  const numberString = amount?.toString() || '';
  if (!numberString) {
    return numberString;
  }
  const formatted = numberString.replace(/(\d)(?=(\d{3})+$)/g, '$&.');

  return `${symbol} ${formatted}`;
};

export const formatMoneySymbol = (amount = '0', symbol = '') => {
  const numberString = amount?.toString() || '';
  if (!numberString) {
    return numberString;
  }
  if (!amount) return amount;
  const inputNumber = numberString.replace(/,/g, '').replace(/[^0-9]/g, '');

  if (Number(inputNumber) === 0) return '';
  if (inputNumber[0] === '0' || inputNumber[3] === '0')
    return `${symbol} ${Number(inputNumber)
      .toString()
      .replace(/,/g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  if (inputNumber.length >= 43)
    return `${symbol} ${inputNumber
      .slice(0, -1)
      .replace(/,/g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  return `${symbol} ${inputNumber
    .replace(/,/g, '')
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

export const formatMoneySymbolDot = (amount = '0', symbol = '') => {
  const numberString = amount?.toString() || '';
  if (!numberString) {
    return numberString;
  }
  const inputNumber = numberString.replace(/\./g, '').replace(/[^0-9]/g, '');

  if (Number(inputNumber) === 0) return '';
  if (inputNumber[0] === '0' || inputNumber[3] === '0')
    return `${symbol} ${Number(inputNumber)
      .toString()
      .replace(/\./g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

  if (inputNumber.length >= 43)
    return `${symbol} ${inputNumber
      .slice(0, -1)
      .replace(/\./g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

  return `${symbol} ${inputNumber
    .replace(/\./g, '')
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

export const formatMoneyNoCurrency = (amount = '0') => {
  const numberString = amount?.toString() || '';
  if (!numberString) {
    return numberString;
  }
  const split = numberString.split('.');
  let decimal = split[1];
  const formatted = split[0].replace(/(\d)(?=(\d{3})+$)/g, '$&.');

  if (decimal === undefined) {
    decimal = '00';
  } else if (decimal[1] === undefined) {
    decimal = `${decimal}0`;
  }
  return `${formatted},${decimal}`;
};

export const formatMoneyNoCurrencyNoDecimal = (amount = '0') => {
  const numberString = amount?.toString() || '';
  if (!numberString) {
    return numberString;
  }
  const split = numberString.split('.');
  const formatted = split[0].replace(/(\d)(?=(\d{3})+$)/g, '$&.');
  return `${formatted}`;
};

export function transformTime(timer) {
  let minutes = parseInt(timer / 60, 10);
  let seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

export function convertMasking(str) {
  const length = str.length - 4;
  const middle = '*'.repeat(length);
  return str[0] + str[1] + middle + str[str.length - 2] + str[str.length - 1];
}

export function stringToColor(string) {
  let hash = 0;
  let i;


  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

// format Rp 100,000,000
export const formatAmountCurrency = (
  input = '',
  currency = 'IDR',
  language = 'id',
  isValas = false
) => {
  const symbol = getSymbol(currency, language, isValas);
  if (!input) return input;
  const inputNumber = input.replace(/,/g, '').replace(/[^0-9]/g, '');

  if (Number(inputNumber) === 0) return '';
  if (inputNumber[0] === '0' || inputNumber[3] === '0')
    return `${symbol} ${Number(inputNumber)
      .toString()
      .replace(/,/g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  if (inputNumber.length >= 43)
    return `${symbol} ${inputNumber
      .slice(0, -1)
      .replace(/,/g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  return `${symbol} ${inputNumber
    .replace(/,/g, '')
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

// format Rp 100.000.000
export const formatAmountDotCurrency = (
  input = '',
  currency = 'IDR',
  language = 'id',
  isValas = false
) => {
  const symbol = getSymbol(currency, language, isValas);
  if (!input) return input;
  const inputNumber = input.replace(/\./g, '').replace(/[^0-9]/g, '');

  if (Number(inputNumber) === 0) return '';
  if (inputNumber[0] === '0' || inputNumber[3] === '0')
    return `${symbol} ${Number(inputNumber)
      .toString()
      .replace(/\./g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

  if (inputNumber.length >= 43)
    return `${symbol} ${inputNumber
      .slice(0, -1)
      .replace(/\./g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

  return `${symbol} ${inputNumber
    .replace(/\./g, '')
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

// format 100,000,000
export const formatAmount = (input = '') => {
  if (!input) return input;
  const inputNumber = input.replace(/,/g, '').replace(/[^0-9]/g, '');

  if (Number(inputNumber) === 0) return '';
  if (inputNumber[0] === '0' || inputNumber[3] === '0')
    return `${Number(inputNumber)
      .toString()
      .replace(/,/g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  if (inputNumber.length >= 43)
    return `${inputNumber
      .slice(0, -1)
      .replace(/,/g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  return `${inputNumber
    .replace(/,/g, '')
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

// format 100.000.000
export const formatAmountDot = (input = '') => {
  if (!input) return input;
  const inputNumber = input.replace(/\./g, '').replace(/[^0-9]/g, '');

  if (Number(inputNumber) === 0) return '';
  if (inputNumber[0] === '0' || inputNumber[3] === '0')
    return `${Number(inputNumber)
      .toString()
      .replace(/\./g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

  if (inputNumber.length >= 43)
    return `${inputNumber
      .slice(0, -1)
      .replace(/\./g, '')
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

  return `${inputNumber
    .replace(/\./g, '')
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

// format only number
export const parseNumber = (val) => {
  const normalize = val && val.replace(/,\./g, '').replace(/[^0-9]/g, '');
  return normalize;
};

// ==>  formatPhoneNumber 0819-2728-4401
export function formatPhoneNumberStrip(number) {
  const space = /^\s*$/;
  let formatted = number;
  if (!space.test(number)) {
    formatted = formatted
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      .join(' - ');
  }

  return formatted;
}
// ==> END formatPhoneNumber

// ==> START formatCardNumber 1112 1124 9403 1429
export function formatCardNumber(number) {
  const space = /^\s*$/;
  let formatted = number;
  if (!space.test(number) && number) {
    formatted = formatted
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      .join(' ');
  }

  return formatted;
}
// ==> END formatCardNumber

// ==> START formatCreditCard 03/2022
export function formatCreditCard(number) {
  const formatted = number
    .replace(
      /^([1-9]\/|[2-9])$/g,
      '0$1/' // 3 > 03/
    )
    .replace(
      /^(0[1-9]|1[0-2])$/g,
      '$1/' // 11 > 11/
    )
    .replace(
      /^([0-1])([3-9])$/g,
      '0$1/$2' // 13 > 01/3
    )
    .replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
      '$1/$2' // 141 > 01/41
    )
    .replace(
      /^([0]+)\/|[0]+$/g,
      '0' // 0/ > 0 and 00 > 0
    )
    .replace(
      /[^\d\/]|^[\/]*$/g,
      '' // To allow only digits and `/`
    )
    .replace(
      /\/\//g,
      '/' // Prevent entering more than 1 `/`
    );

  return formatted;
}
// ==> END formatCardNumber

// ==> START formatPhoneNumberStripNoSpace 4442-23234-23234
export function formatPhoneNumberStripNoSpace(number) {
  const space = /^\s*$/;
  let formatted = number;
  if (!space.test(number) && number) {
    formatted = formatted
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      .join('-');
  }

  return formatted;
}
// ==> END formatPhoneNumberStripNoSpace

// ==> START delay
export function delay(duration) {

  return new Promise((resolve, reject) => {

    if (!duration) return reject('Duration is not set!');
    setTimeout(() => resolve(), duration);
  });
}
// ==> END delay

export const delayFocus = (duration, inputId) => {
  delay(duration).then(() => {
    if (document.getElementById(inputId))
      document.getElementById(inputId).focus();
  });
};

const getTargetDev = (microfrontend) => {
  switch (microfrontend) {
    case 'login':
      return 'http://localhost:3001';
    case 'dashboard':
      return 'http://localhost:3002';
    case 'transfer':
      return 'http://localhost:3003';
    case 'payment':
      return 'http://localhost:3004';
    case 'others':
      return 'http://localhost:3005';
    case 'purchase':
      return 'http://localhost:3006';
    case 'virtual-account':
      return 'http://localhost:3007';
    case 'report':
      return 'http://localhost:3008';
    default:
      return 'http://localhost:3002';
  }
};

export const getPushUrlSideBar = (
  microfrontend,
  url,
  isEnvBTN = false,
  urlDeployment
) => {
  const apiUrl =
    process.env.NODE_ENV === 'production'
      ? isEnvBTN
        ? urlDeployment
        : 'https://dev3.appx.istdigiplatform.com'
      : getTargetDev(microfrontend);
  return `${apiUrl}${url}`;
};

// format to delete first space
export const parseFirstSpace = (val) => {
  const normalize = val && val?.replace(/^\s+/, '');
  return normalize;
};

export const generateArrayOfYears = (numberRange = 100) => {
  const max = new Date().getFullYear();
  const min = max - numberRange;
  const years = [];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};

export const handleExceptionError = (statusCode) => {
  switch (statusCode) {
    case 401:
      return false;
    case 402:
      return false;
    case 403:
      return false;
    case 502:
      return false;
    case 503:
      return false;
    default:
      return true;
  }
};

export const validateEmail = (email) =>
  email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

// format only Text and number
export const parseTextNum = (val) => {
  const normalize = val && val.replace(/,\./g, '').replace(/[^0-9a-zA-Z]/g, '');
  return parseFirstSpace(normalize);
};

// format only Text and number
export const parseTextNumSpace = (val) => {
  const normalize =
    val && val.replace(/,\./g, '').replace(/[^0-9a-zA-Z\s]/g, '');
  return parseFirstSpace(normalize);
};

// format only Text only
export const parseTextOnly = (val) => {
  const normalize = val && val.replace(/,\./g, '').replace(/[^a-zA-Z\s]/g, '');
  return parseFirstSpace(normalize);
};

// ==> START formatCardNumberInput 1112 1124 9403 1429
export function formatCardNumberInput(number) {
  const normalizeNumber = parseNumber(number);
  const space = /^\s*$/;
  let formatted = normalizeNumber;
  if (!space.test(normalizeNumber) && normalizeNumber) {
    formatted = formatted
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      .join(' ');
  }

  return formatted;
}
// ==> END formatCardNumber

// ==>  normalizeInputPhoneNumberWithSpace 819 2728 4401
export const normalizeInputPhoneNumberWithSpace = (value) => {
  const number = parseNumber(value);
  if (!number) return number;
  const text = number[0] === '0' ? number.slice(1) : number;
  const currentValue = text.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;
  if (cvLength < 4) return currentValue;
  if (cvLength < 8)
    return `${currentValue.slice(0, 3)} ${currentValue.slice(3)}`;
  if (cvLength < 12)
    return `${currentValue.slice(0, 3)} ${currentValue.slice(
      3,
      7
    )} ${currentValue.slice(7, 11)}`;
  return `${currentValue.slice(0, 3)} ${currentValue.slice(
    3,
    7
  )} ${currentValue.slice(7, 11)} ${currentValue.slice(11, 12)}`;
};
// ==> END normalizeInputPhoneNumberWithSpace

// ==>  normalizeInputPhoneNumber 819-2728-4401
export const normalizeInputPhoneNumber = (value) => {
  const number = parseNumber(value);
  if (!number) return number;
  const text = number[0] === '0' ? number.slice(1) : number;
  const currentValue = text.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;
  if (cvLength < 4) return currentValue;
  if (cvLength < 8)
    return `${currentValue.slice(0, 3)}-${currentValue.slice(3)}`;
  if (cvLength < 12)
    return `${currentValue.slice(0, 3)}-${currentValue.slice(
      3,
      7
    )}-${currentValue.slice(7, 11)}`;
  return `${currentValue.slice(0, 3)}-${currentValue.slice(
    3,
    7
  )}-${currentValue.slice(7, 11)}-${currentValue.slice(11, 12)}`;
};
// ==> END normalizeInputPhoneNumber

// ==>  normalizeInputFaxNumber (022) 27284401
export const normalizeInputFaxNumber = (value) => {
  const number = parseNumber(value);
  if (!number) return number;
  const currentValue = number.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;
  if (cvLength < 4) return currentValue;

  return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 19)}`;
};
// ==> END normalizeInputFaxNumber

const generateMask = (size) => {
  let maskingValue = '';
  while (maskingValue.length <= size) {
    maskingValue += '*';
  }
  return maskingValue;
};

// ==>  normalizeInputPhoneNumberWithSpaceMasking +62 819 **** 4401
export const normalizeInputPhoneNumberWithSpaceMasking = (value) => {
  const number = parseNumber(value);
  if (!number) return number;
  const text = number[0] === '0' ? number.slice(1) : number;
  const currentValue = text.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;
  if (cvLength - 8 <= 0) return number;
  const firstThreeDigit = currentValue.slice(0, 3);
  const lastTwoDigit = currentValue.slice(cvLength - 2, cvLength);
  const lastTwoDigitMasking = `**${lastTwoDigit}`;
  const middleMasking = generateMask(cvLength - 8);

  return `+62 ${firstThreeDigit} ${middleMasking} ${lastTwoDigitMasking}`;
};
// ==> END normalizeInputPhoneNumberWithSpaceMasking

export const compressImage = (files, handleSuccess, handleError) => {
  const compress = new Compressor(files, {
    quality: 0.8,
    maxWidth: 600,
    maxHeight: 600,
    convertTypes: ['image/png', 'image/jpg', 'image/jpeg'],
    convertSize: 1000000,
    success(result) {
      const toBase64 = blobToBase64(result);
      toBase64.then((res) => {
        handleSuccess(res);
      });
      return toBase64;
    },
    error(err) {
      handleError(err);
      return err;
    },
  });
  return compress;
};

export function getCookies(key, defaultValue) {
  const cookies = Cookies.get(key);
  if (cookies) {
    return JSON.parse(cookies);
  } else {
    return defaultValue;
  }
}

export function setCookies(key, value, config) {
  Cookies.set(key, JSON.stringify(value), config);
}
