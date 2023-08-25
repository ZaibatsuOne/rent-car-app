import CookieProvider from "@/components/Providers/CookieProvider";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ProviderClient from "@/components/Providers/Provider.client";
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import SessProvider from "@/components/Providers/SessProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MORENT - Rent Auto",
  description: "Rent car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("container", jakarta.className)}>
        <ProviderClient>
          <CookieProvider>
            <Theme>
              <SessProvider>
                <NavBar />
                {children}
                <Footer />
              </SessProvider>
            </Theme>
          </CookieProvider>
        </ProviderClient>
      </body>
    </html>
  );
}
