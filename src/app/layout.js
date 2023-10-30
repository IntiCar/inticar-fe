'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import '../../public/scss/main.scss';

import styled from 'styled-components';

import DefaultHeader from '@/src/components/common/DefaultHeader';
import Footer from '@/src/components/common/Footer';
import HeaderSidebar from '@/src/components/common/HeaderSidebar';
import HeaderTop from '@/src/components/common/HeaderTop';
import MobileMenu from '@/src/components/common/MobileMenu';
import ScrollToTop from '@/src/components/common/ScrollTop';
import LoginSignupModal from '@/src/components/common/login-signup';

if (typeof window !== 'undefined') {
  import('bootstrap');
}

const inter = Inter({ subsets: ['latin'] });

const Body = styled.body`
  font-family: ${inter.family};
  font-size: ${inter.fontSize};
  margin: 0;
  padding: 0;
`;

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <html lang="en">
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

          <HeaderTop />

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
    </html>
  );
}
