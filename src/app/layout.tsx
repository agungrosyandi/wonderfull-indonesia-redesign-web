import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import { ReactLenis } from "@/hooks/useLenis";
import StateContextProvider from "@/contexts/context-provider";
import Footer from "@/components/layout/Footer";
import Toaster from "@/components/reusable/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonderful Indonesia",
  description: "Explore our Beauty",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactLenis root>
        <body className={`${inter.className}`}>
          <Container>
            <Header />
            <Toaster />
            <StateContextProvider>{children}</StateContextProvider>
            <Footer />
          </Container>
        </body>
      </ReactLenis>
    </html>
  );
}
