import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "승미의 블로그",
    template: "승미의 블로그 | %s",
  },
  description: "프론트엔드 개발자 승미의 블로그",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
