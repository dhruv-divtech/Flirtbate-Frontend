'use client';

import ThemeCustomization from 'themes';
import Locales from 'components/Locales';
import { ConfigProvider } from 'contexts/configContext';
import { Manrope } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';
import '../app/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

const manropeFont = Manrope({ subsets: ['latin'] });

const ProviderWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <ConfigProvider>
      <ThemeCustomization>
        <Locales>
          <>
            <SessionProvider refetchInterval={0}>{children}</SessionProvider>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              className="version2"
              style={{
                fontFamily: manropeFont.style.fontFamily
              }}
            />
          </>
        </Locales>
      </ThemeCustomization>
    </ConfigProvider>
  );
};

export default ProviderWrapper;
