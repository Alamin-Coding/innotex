import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "innotex",
  description: "Join The Printing Revolution, We are a leading European business group, manufacturers of high-quality textile transfers, and innovative textile transfer printing technology for the textile industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header></Header> */}
        {children}
      </body>
    </html>
  );
}
