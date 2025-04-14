import { Montserrat_Alternates } from "next/font/google";
import LayoutHeader from "../components/header/layout-header";
import "./globals.css";

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-montserrat-var',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-tertiary`}
      >
        <div className='h-screen w-screen'>
          <LayoutHeader />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
