 
import moment from 'moment';
import 'moment/locale/id';
import SecureLS from 'secure-ls';

const ls = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: 'LpvmfnqerendfjSJMopfk',
});

// local storage action
export const setLocalStorage = (key, value) => ls.set(key, value);
export const getLocalStorage = (key) => ls.get(key);
export const removeLocalStorage = (key) => ls.remove(key);
export const removeAllLocalStorage = () => {
  // Handle Exception
  const listKeyException = ['_secure__ls__metadata', 'language'];
  const arrayKey = ls.getAllKeys();
  arrayKey.forEach((keyValue) =>
    listKeyException.includes(keyValue) ? keyValue : ls.remove(keyValue)
  );
};
// export const removeAllLocalStorage = () => ls.removeAll();

// session storage action
export const setSessionStorage = (key, value) =>
  sessionStorage.setItem(key, value);
export const getSessionStorage = (key) => sessionStorage.getItem(key);
export const removeSessionStorage = (key) => sessionStorage.removeItem(key);
export const removeAllSessionStorage = () => sessionStorage.clear();
// export const removeAllLocalStorage = () => ls.removeAll();

/* ----------- example format date: Date Format ----------- */
export const converDateFromBE = (date) =>
  date ? moment(date, 'YYYY-MM-DD').toDate() : '-';

/* ----------- example format date: 19 Januari 2008 ----------- */
export const standardDate = (date) =>
  date ? moment(date).format('D MMMM YYYY') : '-';

/* ----------- example format date: Januari 19, 2008 ----------- */
export const fullMonthName = (date) =>
  date ? moment(date).format('MMMM D, YYYY') : '-';

/* ----------- example format date: Jan 19, 2008 ----------- */
export const initialMonthName = (date) =>
  date ? moment(date).format('MMM D, YYYY') : '-';

/* ----------- example format date: 19 Jan, 3.20 PM ----------- */
export const dateInWordsWithTime = (date) =>
  date ? moment(date).format('D MMM, H:mm') : '-';

/* ----------- example format time: 10 menit yang lalu ----------- */
const regex = /dalam/gi;
export const distanceInWordsToNow = (date) =>
  date ? moment(date).startOf('hour').fromNow().replace(regex, '') : '';

/* ----------- example format time: Mar 20 ----------- */
export const dateMonthOnly = (date) =>
  date ? moment(date).format('MMM DD') : '-';

export const monthYearOnly = (date) => {
  moment.locale(getLocalStorage('language'));
  return date ? moment(date).format('MMMM YYYY') : '-';
};

/* ----------- example format date MM-YYYY to MM-DD-YYY ----------- */
export const specificFormatToAnother = (date, currentFormat, newFormat) => {
  moment.locale(getLocalStorage('language'));
  return date ? moment(date, currentFormat).format(newFormat) : '';
};

/* ----------- example format time: 20 Mar 2018 ----------- */
export const dateMonthYear = (date) =>
  date ? moment(date).format('DD MMM YYYY') : '-';

/* ----------- input 30122022 to format time: 20 Mar 2018 ----------- */
export const dateMonthYearOthers = (date) =>
  date
    ? dateMonthYear(new Date(date.replace(/(\d{2})(\d{2})(\d{2})/, '$2/$1/$3')))
    : '-';

/* ----------- example format time: 20 Mar 2018 16:14:50 ----------- */
export const dateMonthYearHours = (date) =>
  date ? moment(date).format('DD MMM YYYY H:mm:ss') : '-';

export const dateMonthYearHoursWithSlash = (date) =>
  date ? moment(date).format('DD/MM/YYYY H:mm:ss') : '-';

export const dateMonthYearHour = (date) => {
  moment.locale('en');
  return date ? moment(date).format('DD/MM/YYYY H:mm:ss A') : '-';
};

export const dateMonthsYearHour = (date) => {
  moment.locale('en');
  return date ? moment(date).format('DD MMMM YYYY H:mm:ss A') : '-';
};

/* ----------- example format date: 19 Januari 2008 ----------- */
export const standardDateByCountry = (date, countryCode) => {
  moment.locale(countryCode);
  return date ? moment(date).format('DD MMMM YYYY') : '-';
};

export const standardDateWithMinutesByCountry = (date, countryCode) => {
  moment.locale(countryCode);
  return date ? moment(date).format('DD MMMM YYYY H:mm') : '-';
};

export const standardDateWithMinutesByCountryListMessage = (
  date,
  countryCode
) => {
  moment.locale(countryCode);
  return date ? moment(date).format('DD MMM YYYY H:mm') : '-';
};

export const standardDayMountMinutesByCountry = (date, countryCode) => {
  moment.locale(countryCode);
  return date ? moment(date).format('D MMMM H:mm') : '-';
};

export const resiFormatTimesByCountry = (date, countryCode) => {
  moment.locale(countryCode);
  return date ? moment(date).format('H:mm:ss') : '-';
};

export const dateInboxMessageByCountry = (date, countryCode) => {
  moment.locale(countryCode);
  return date ? moment(date).format('DD MMMM YYYY H:mm:ss') : '-';
};

export const dateHour = (date, countryCode) => {
  moment.locale('en');
  return date ? moment(date).format('LT') : '-';
};

export const dateHMS = (date, countryCode) => {
  moment.locale(countryCode);
  return date ? moment(date).format('HH:MM:SS') : '-';
};

/* ----------- example format time: 20-03-2018 ----------- */
export const inputDate = (date) =>
  date ? moment(date).format('DDMMYYYY') : '-';

/* ----------- example format time: 2018/03/20 ----------- */
export const inputDateForText = (date) =>
  date ? moment(date).format('YYYY/MM/DD') : '';

/* ----------- example format time: 20/03/2018 ----------- */
export const inputDateForTextOnly = (date) =>
  date ? moment(date).format('DD/MM/YYYY') : '';

/* ----------- example format time: 2018-03-20 ----------- */
export const backendDate = (date) =>
  date ? moment(date).format('YYYY-MM-DD') : '';

/* ----------- Expired Date Cart ----------- */
export const isExpired = (date, duration) => {
  const expireDate = moment(date, 'DD-MM-YYYY')
    .add(duration, 'days')
    .format('DD-MM-YYYY');

  const dueDate = moment().isAfter(expireDate, 'DD-MM-YYYY', 'days');
  return dueDate;
};

export const convertMonth = (month, year) => {
  switch (month) {
    case 0:
      return {
        id: 1,
        value: `1 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `Januari ${year}`
            : `January ${year}`,
      };
    case 1:
      return {
        id: 2,
        value: `2 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `Februari ${year}`
            : `February ${year}`,
      };
    case 2:
      return {
        id: 3,
        value: `3 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `Maret ${year}`
            : `March ${year}`,
      };
    case 3:
      return {
        id: 4,
        value: `4 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `April ${year}`
            : `April ${year}`,
      };
    case 4:
      return {
        id: 5,
        value: `5 ${year}`,
        text:
          getLocalStorage('language') === 'id' ? `Mei ${year}` : `May ${year}`,
      };
    case 5:
      return {
        id: 6,
        value: `6 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `Juni ${year}`
            : `June ${year}`,
      };
    case 6:
      return {
        id: 7,
        value: `7 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `Juli ${year}`
            : `July ${year}`,
      };
    case 7:
      return {
        id: 8,
        value: `8 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `Agustus ${year}`
            : `August ${year}`,
      };
    case 8:
      return {
        id: 9,
        value: `9 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `September ${year}`
            : `September ${year}`,
      };
    case 9:
      return {
        id: 10,
        value: `10 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `Oktober ${year}`
            : `October ${year}`,
      };
    case 10:
      return {
        id: 11,
        value: `11 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `November ${year}`
            : `November ${year}`,
      };
    default:
      return {
        id: 12,
        value: `12 ${year}`,
        text:
          getLocalStorage('language') === 'id'
            ? `Desember ${year}`
            : `December ${year}`,
      };
  }
};

export const getPushUrl = (targetDev) => {
  // const devApiUrl = "https://dev3.appx.istdigiplatform.com";
  // const sitURL = "http://ibbisnis-sit.btn.co.id";
  // const uatURL = "https://ibbisnis-uat.btn.co.id";
  // const prodURL = "https://ibbisnis.btn.co.id";
  const apiUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.VITE_APP_DOMAIN
      : targetDev || 'http://localhost:3002';
  return apiUrl;
};

export const mappingLanguage = (lang) => {
  if (lang === 'IDN' || lang === 'ID') {
    return 'id';
  }
  if (lang === 'ENG' || lang === 'EN') {
    return 'en';
  }
  return 'id';
};

export const getFullPhoneNumber = (phoneNumber = '') =>
  phoneNumber !== '' && phoneNumber[0] !== '0'
    ? `0${phoneNumber}`
    : phoneNumber;

export const mappingRole = (roleCode) => {
  switch (roleCode) {
    case 'USER_MAKER':
      return {
        label: 'Maker',
        roleCode: 'USER_MAKER',
        value: 0,
        roleCodeId: 1,
      };
    case 'USER_APPROVER':
      return {
        label: 'Approver',
        roleCode: 'USER_APPROVER',
        value: 1,
        roleCodeId: 2,
      };
    case 'USER_RELEASER':
      return {
        label: 'Releaser',
        roleCode: 'USER_RELEASER',
        value: 2,
        roleCodeId: 3,
      };
    case 'USER_MAKER_APPROVER':
      return {
        label: 'Maker, Approver',
        roleCode: 'USER_MAKER_APPROVER',
        value: 3,
        roleCodeId: 4,
      };
    case 'USER_MAKER_RELEASER':
      return {
        label: 'Maker, Releaser',
        roleCode: 'USER_MAKER_RELEASER',
        value: 4,
        roleCodeId: 5,
      };
    case 'USER_MAKER_APPROVER_RELEASER':
      return {
        label: 'Maker, Approver, Releaser',
        roleCode: 'USER_MAKER_APPROVER_RELEASER',
        value: 5,
        roleCodeId: 6,
      };
    case 'USER_APPROVER_RELEASER':
      return {
        label: 'Approver, Releaser',
        roleCode: 'USER_APPROVER_RELEASER',
        value: 6,
        roleCodeId: 7,
      };

    default:
      return { label: '', roleCode: '' };
  }
};

export const handleGetErrorMessage = (responseData = {}, language = 'id') =>
  responseData?.idnMessage
    ? language === 'id'
      ? responseData?.idnMessage
      : responseData?.engMessage
    : responseData?.message;

export const validateEmail = (email) =>
  email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

// format only No First Space
export const parseNoFirstSpace = (val) => {
  const normalize = val[0] === ' ' ? val.slice(1) : val;
  return normalize;
};

// format only Text and number
export const parseTextNum = (val) => {
  const normalize = val && val.replace(/,\./g, '').replace(/[^0-9a-zA-Z]/g, '');
  return normalize;
};

// format only Text only
export const parseTextOnly = (val) => {
  const normalize = val && val.replace(/,\./g, '').replace(/[^a-zA-Z\s]/g, '');
  return normalize;
};

// ==>  formatPhoneNumber 819-2728-4401
export const maskingPhoneNumber = (value = '') =>
  value.length > 8
    ? `+62 xxx xxxx x${value[value.length - 4]}${value[value.length - 3]}${
      value[value.length - 2]
    } ${value[value.length - 1]}`
    : value;
// ==> END formatPhoneNumber

// ==>  format alphanumeric & space
export const formatTextNumSpace = (val) => {
  const normalize =
    val && val.replace(/,\./g, '').replace(/[^0-9a-zA-Z\s]/g, '');
  return normalize;
};

// format only FullName
export const parseFullName = (val) => {
  const normalize =
    val && val.replace(/,\./g, '').replace(/[^a-zA-Z\s-\']/g, '');
  return parseNoFirstSpace(normalize);
};

export const makeId = (length) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
