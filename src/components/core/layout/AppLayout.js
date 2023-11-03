'use client';

import { Provider } from 'react-redux';

import '@/public/scss/main.scss';
import store from '@/src/stores';

if (typeof window !== 'undefined') {
  import('bootstrap');
}

const AppLayout = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppLayout;
