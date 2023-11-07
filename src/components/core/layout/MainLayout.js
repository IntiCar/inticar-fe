'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import styled from 'styled-components';

import DefaultHeader from '@/src/components/common/DefaultHeader';
import Footer from '@/src/components/common/Footer';
import HeaderSidebar from '@/src/components/common/HeaderSidebar';
import MobileMenu from '@/src/components/common/MobileMenu';
import ScrollToTop from '@/src/components/common/ScrollTop';
import LoginSignupModal from '@/src/components/common/login-signup';
import { getUserCookie } from '@/src/stores/auth/action';
import { useDispatch } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

const Body = styled.body`
  font-family: ${inter.family};
  font-size: ${inter.fontSize};
  margin: 0;
  padding: 0;
`;

export default function MainLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    dispatch(getUserCookie());
  }, [dispatch]);

  return (
    <Body cz-shortcut-listen="false">
      <div className="wrapper">
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <HeaderSidebar />
        </div>
        <DefaultHeader />
        <MobileMenu />
        {children}
        <ScrollToTop />
        <Footer />
        <div
          className="sign_up_modal modal fade"
          id="logInModal"
          data-backdrop="static"
          data-keyboard=""
          tabIndex={-1}
          aria-hidden="true"
        >
          <LoginSignupModal />
        </div>
      </div>
    </Body>
  );
}
