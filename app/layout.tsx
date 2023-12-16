import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Awesome Memo App",
  description: "Generated by create next app",
};

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
