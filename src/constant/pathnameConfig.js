 
const pathnameCONFIG = {
  ROOT_URL: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  DASHBOARD: '/dashboard',
  MASTER: {
    PARAMETER_MAINTENANCE: '/master/parameter-maintenance',
    DEBTOR_MAINTENANCE: '/master/debtor-maintenance',
    GROUP_MAINTENANCE: '/master/group-maintenance',
  },
  PIPELINE: {
    PIPELINE_CREATION: '/pipeline/pipeline-creation',
    PIPELINE_CREATION_DETAIL: '/pipeline/pipeline-creation/detail',
    PIPELINE_MONITORING: '/pipeline/pipeline-monitoring',
  },
  APPROVAL: {
    PIPELINE_APPROVAL: '/approval/pipeline-approval',
    REQUEST_APPROVAL: '/approval/request-approval',
    RAPAT_APPROVAL: '/approval/rapat-approval',
  },
  CREDIT_CHECKING: {
    REQUEST: '/credit-checking/request',
    STAFF_ASSIGNMENT: '/credit-checking/staff-assignment',
    DOCUMENT_VERIFICATION: '/credit-checking/document-verification',
    RESULT: '/credit-checking/result',
    SUMMARY: '/credit-checking/summary',
    APPROVAL: '/credit-checking/approval',
  },
  LEGAL_CHECKING: {
    REQUEST: '/legal-checking/request',
    STAFF_ASSIGNMENT: '/legal-checking/staff-assignment',
    RESULT: '/legal-checking/result',
    APPROVAL: '/legal-checking/approval',
  },
  MIP: {
    CREATION: '/mip/request',
    ANALYSIS: '/mip/staff-assignment',
    APU_PPT: {
      REQUEST: '/mip/apu-ppt/request',
      STAFF_ASSIGNMENT: '/mip/apu-ppt/staff-asignment',
      RESULT: '/mip/apu-ppt/result',
      APPROVAL: '/mip/apu-ppt/approval',
    },
    HIGH_RISK_CHECKING: {
      STAFF_ASSIGNMENT: '/mip/high-risk-checking/staff-asignment',
      RESULT: '/mip/high-risk-checking/result',
      APPROVAL: '/mip/high-risk-checking/approval',
    },
    LEGAL_CHECKING: {
      STAFF_ASSIGNMENT: '/mip/legal-checking/staff-asignment',
      RESULT: '/mip/legal-checking/result',
      APPROVAL: '/mip/legal-checking/approval',
    },
    TECHNICAL_REVIEW: {
      STAFF_ASSIGNMENT: '/mip/technical-review/staff-asignment',
      RESULT: '/mip/technical-review/result',
      APPROVAL: '/mip/technical-review/approval',
    },
  },
  RISALAH_RAPAT: {
    BASE: '/risalah-rapat',
    VERIFICATION: {
      STAFF_ASIGNMENT: '/risalah-rapat/staff-asignment',
      RESULT: '/risalah-rapat/verification-result',
      APPROVAL: '/risalah-rapat/verification-approval',
    },
  },
};

export { pathnameCONFIG };
