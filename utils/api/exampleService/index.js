import axios from 'axios';

import apiUrl from '../baseUrl';

const serviceUrl = '/exampleservice';

// --------- Start Registrasi Service ----------------

export const serviceValidatePassword = (payload) =>
  axios.post(`${apiUrl}${serviceUrl}/relink/validatePassword`, payload);

export const serviceValidateMpin = (payload) =>
  axios.post(
    `${apiUrl}${serviceUrl}/relink/validateMpin
    `,
    payload
  );

export const serviceChangeDevice = (payload) =>
  axios.post(`${apiUrl}${serviceUrl}/relink/changeDevice`, payload);

export const serviceCreateUserId = (payload) =>
  axios.post(`${apiUrl}${serviceUrl}/createUserId`, payload);

export const serviceValidationPhoneNumberAndEmail = (payload) =>
  axios.post(
    `${apiUrl}${serviceUrl}/ekyc/validationPhoneNumberAndEmailn`,
    payload
  );

// --------- End Registrasi Service -------------------

// --------- Start OCR ----------------

// --------- End OCR -------------------

// --------- Start Form Data ----------------

export const serviceValidateCifbyNik = (payload) =>
  axios.post(`${apiUrl}${serviceUrl}/ekyc/validateCifByNik`, payload);

export const serviceValidateAml = (payload) =>
  axios.post(`${apiUrl}${serviceUrl}/ekyc/validateAml`, payload);

export const serviceSubmitPersonalData = (payload) =>
  axios.post(`${apiUrl}${serviceUrl}/ekyc/completePersonalData`, payload);

// --------- End Form Data -------------------
