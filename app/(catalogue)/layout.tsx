import AsideNavbar from "@/components/dashboard/AsideNavbar";
import { Metadata } from "next";
import { ReactNode } from "react";

interface Layout {
  children: ReactNode;
}
export const metadata: Metadata = {
  title: "MORENT - Catalogue",
};

const layout = ({ children }: Layout) => {
  return (
    <main className="flex">
      <AsideNavbar />
      {children}
    </main>
  );
};

export default layout;
