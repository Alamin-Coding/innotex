import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const notosans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "innotex",
  description: "Join The Printing Revolution, We are a leading European business group, manufacturers of high-quality textile transfers, and innovative textile transfer printing technology for the textile industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notosans.className}>
        {/* <Header></Header> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
