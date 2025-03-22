import { Providers } from './providers';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Balance Cleanse - Modern E-commerce',
  description: 'Fresh and clean e-commerce experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              document.documentElement.classList.add('light');
              document.documentElement.style.colorScheme = 'light';
            } catch (e) {}
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
