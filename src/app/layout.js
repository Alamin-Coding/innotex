import localFont from 'next/font/local'
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import MegaMenu from '@/components/MegaMenu/MainMenu';

const notosans = Noto_Sans({ subsets: ["latin"] });
const proxima = localFont({ src: '../../public/fonts/Proxima Nova Regular.otf' })

export const metadata = {
  title: "innotex",
  description: "Join The Printing Revolution, We are a leading European business group, manufacturers of high-quality textile transfers, and innovative textile transfer printing technology for the textile industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${proxima.className} light`}>
        <MegaMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
