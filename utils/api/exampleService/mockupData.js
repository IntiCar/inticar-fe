export const requestBodyPhoneNumberAndEmail = {
  nikNasabah: 'string',
};

export const validationPhoneNumberAndEmailSuccess = {
  status: 200,
  data: {
    code: 'string',
    codeSystem: 'string',
    message: 'string',
    messageError: 'string',
    activityRefCode: 'string',
    result: {
      userExistMobile: true,
      signature: 'string',
    },
  },
};

export const validationPhoneNumberAndEmailFailed = {
  status: 500,
  data: {
    code: 'string',
    codeSystem: 'string',
    message: 'string',
    messageError: 'string',
    activityRefCode: 'string',
    result: {},
  },
};
// Start OCR
export const ocrSuccess = {
  status: 200,
  data: {
    code: 'string',
    codeSystem: 'string',
    message: 'string',
    messageError: 'string',
    activityRefCode: 'string',
    result: {
      nik: 'string',
      fullName: 'string',
      pob: 'string',
      dob: 'string',
      gender: 'string',
      genderKey: 'string',
      maritalStatus: 'string',
      maritalStatusKey: 'string',
      religion: 'string',
      religionKey: 'string',
      address: 'string',
      province: 'string',
      city: 'string',
      rt: 'string',
      rw: 'string',
      village: 'string',
      district: 'string',
      postalCode: 'string',
      citizenshipKey: 'string',
      citizenshipValue: 'string',
    },
  },
};

// End OCR

// Start Form Data

// End Form Data
