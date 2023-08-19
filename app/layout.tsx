import NavBar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import ProviderClient from "@/components/Providers/Provider.client";
import FilterProvider from "@/components/Providers/FilterProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("container max-w-[1348px]", jakarta.className)}>
        <ProviderClient>
          <FilterProvider>
            <NavBar />
            {children}
            <Footer />
          </FilterProvider>
        </ProviderClient>
      </body>
    </html>
  );
}
