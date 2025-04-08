import { Montserrat_Alternates, Nunito  } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";



const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-primary`}
      >
        <Home/>
      </body>
    </html>
  );
}
