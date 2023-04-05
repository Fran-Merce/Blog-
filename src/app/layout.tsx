import { Navbar } from '@/components/navbar/Navbar';
import { Roboto } from 'next/font/google';

import '@/styles/globals.scss';
import styles from './styles/Layout.module.scss';
interface Props {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: '300',
  style: 'normal',
  subsets: ['latin'],
});
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body className={(roboto.className, styles.layout)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
