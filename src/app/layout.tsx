import type { Metadata } from 'next';
import './globals.css';
import ProviderWrapper from './ProviderWrapper';
import Footer from 'views/guestLayout/footer';

export const metadata: Metadata = {
  title: 'flirtBate - SassyEscort',
  description: 'flirtBate - SassyEscort'
};

export default function RootLayout({
  children
}: Readonly<{
  children: JSX.Element;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          <>
            {children}
            <Footer />
          </>
        </ProviderWrapper>
      </body>
    </html>
  );
}
