import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/header";
import Footer from "@/Components/footer";
import Container from "@/Components/container";
import { ToastContainer } from "react-toastify";
import GoogleTagManager from "@/Components/GoogleTagManager";
import ScrollToTopButton from "@/Components/ScrollToTop";

const inter = Poppins({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Kapil Farm",
  description: "Kapil Farm Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="AW-11454847573" />

      <body
        className={`${inter.className}  bg-zinc-100 text-zinc-800  min-h-screen  `}
      >
        <Container>
          <Header />
          <ToastContainer />

          {children}
          <Footer />
        </Container>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
