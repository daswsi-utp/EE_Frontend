import { Montserrat_Alternates, Nunito } from 'next/font/google';
import './globals.css';
import { ProductProvider } from './context/ProductContext';
import ChatWidget from './Components/chat/ChatWidget';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-tertiary text-white h-fit`}>
        <ProductProvider>
          <main>
            <ChatWidget />
            {children}
          </main>
        </ProductProvider>
      </body>
    </html>
  );
}
