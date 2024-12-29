import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Nav from "@/components/Nav";

import { Nunito } from "next/font/google";
export const metadata = {
  title: "Everflow",
  description: "Generated by create next app",
};

const mainFont = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'], // You can specify any weight you need
  style: ['normal', 'italic'], // Add styles if needed
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
