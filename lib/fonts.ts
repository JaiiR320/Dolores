import localFont from 'next/font/local';

export const quicheRegular = localFont({
  src: '../public/fonts/quiche-regular/QuicheText-Regular.woff2',
  variable: '--font-quiche-regular',
  display: 'swap',
  weight: '400',
});

export const quicheBold = localFont({
  src: '../public/fonts/quiche-bold/QuicheText-Bold.woff2',
  variable: '--font-quiche-bold',
  display: 'swap',
  weight: '700',
});
