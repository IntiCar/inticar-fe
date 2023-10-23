// --- PIPELINE ---

import { pathnameCONFIG } from '@/constant/pathnameConfig';
import {
  ExamplePages,
  Login,
  PipelineCreation,
  PipelineCreationDetail,
} from '@/container/pages';

export const BeforeLogin = [
  {
    id: 1000,
    path: pathnameCONFIG.ROOT_URL,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.LOGIN,
    component: <Login />,
    exact: true,
  },
];

export const AppRoutes = [
  {
    path: pathnameCONFIG.DASHBOARD,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.DASHBOARD,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MASTER.PARAMETER_MAINTENANCE,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MASTER.DEBTOR_MAINTENANCE,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MASTER.GROUP_MAINTENANCE,
    component: <ExamplePages />,
    exact: true,
  },
  // --- PIPELINE ---
  {
    path: pathnameCONFIG.PIPELINE.PIPELINE_CREATION,
    component: <PipelineCreation />,
    exact: true,
  },
  {
    path: pathnameCONFIG.PIPELINE.PIPELINE_CREATION_DETAIL,
    component: <PipelineCreationDetail />,
    exact: true,
  },
  {
    id: 7,
    path: pathnameCONFIG.APPROVAL.PIPELINE_APPROVAL,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.APPROVAL.PIPELINE_APPROVAL,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.APPROVAL.REQUEST_APPROVAL,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.APPROVAL.RAPAT_APPROVAL,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.CREDIT_CHECKING.REQUEST,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.CREDIT_CHECKING.STAFF_ASSIGNMENT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.CREDIT_CHECKING.DOCUMENT_VERIFICATION,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.CREDIT_CHECKING.RESULT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.CREDIT_CHECKING.SUMMARY,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.CREDIT_CHECKING.APPROVAL,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.LEGAL_CHECKING.REQUEST,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.LEGAL_CHECKING.STAFF_ASSIGNMENT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.LEGAL_CHECKING.RESULT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.LEGAL_CHECKING.REQUEST,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.CREATION,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.ANALYSIS,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.APU_PPT.REQUEST,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.APU_PPT.STAFF_ASSIGNMENT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.APU_PPT.RESULT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.APU_PPT.APPROVAL,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.HIGH_RISK_CHECKING.STAFF_ASSIGNMENT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.HIGH_RISK_CHECKING.RESULT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.HIGH_RISK_CHECKING.APPROVAL,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.LEGAL_CHECKING.STAFF_ASSIGNMENT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.LEGAL_CHECKING.RESULT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.LEGAL_CHECKING.APPROVAL,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.TECHNICAL_REVIEW.STAFF_ASSIGNMENT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.TECHNICAL_REVIEW.RESULT,
    component: <ExamplePages />,
    exact: true,
  },
  {
    path: pathnameCONFIG.MIP.TECHNICAL_REVIEW.APPROVAL,
    component: <ExamplePages />,
    exact: true,
  },
];
