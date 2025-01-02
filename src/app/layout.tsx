import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/(main-home)/component/Header";
import Container from "@/app/(main-home)/component/Container";
import { ReactLenis } from "@/hooks/useLenis";
import StateContextProvider from "@/contexts/context-provider";
import { getDestination, searchDestinations } from "@/actions/actions";
import { Toaster } from "@/components/ui/sonner";
import prisma from "@/utils/db";
import Footer from "@/app/(main-home)/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonderful Indonesia",
  description: "temukan event-event menarik di kota Bandung",
};

export default async function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>,
  places: string,
  page = 1,
  searchQuery: string
) {
  const { destinations, totalCount } = await getDestination(places, (page = 1));
  const allDatabase = await prisma.kategoriDestination.findMany();

  // const allDatabase = await searchDestinations(searchQuery);

  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${inter.className} bg-white text-white `}>
          <Container>
            <Header />
            <StateContextProvider
              allDatabase={allDatabase}
              destinations={destinations}
              totalCount={totalCount}
            >
              {children}
            </StateContextProvider>
            <Footer />
          </Container>

          <Toaster position="top-left" />
        </body>
      </ReactLenis>
    </html>
  );
}
