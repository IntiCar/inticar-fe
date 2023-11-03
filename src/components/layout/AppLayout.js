'use client';

import { Provider } from 'react-redux';

import store from '@/src/stores';

const AppLayout = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppLayout;
