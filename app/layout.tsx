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

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morent - Rent Auto",
  description: "Rent car",
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
          <CookieProvider>
            <Theme>
              {" "}
              <NavBar />
              {children}
              <Footer />
            </Theme>
          </CookieProvider>
        </ProviderClient>
      </body>
    </html>
  );
}
