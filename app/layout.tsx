import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "HomeFinder - Find Your Dream Home",
  description: "Explore a wide range of properties for sale and rent across Australia.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" async></script>
      </head>
      <body className={`${plusJakartaSans.variable} ${notoSans.variable}`}>
        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" 
             style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
          <div className="layout-container flex h-full grow flex-col">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}