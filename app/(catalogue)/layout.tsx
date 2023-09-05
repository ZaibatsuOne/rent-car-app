import AsideNavbar from "@/components/dashboard/AsideNavbar";
import { ReactNode } from "react";

interface Layout {
  children: ReactNode;
}
const layout = ({ children }: Layout) => {
  return (
    <main className="flex ">
      <AsideNavbar />
      {children}
    </main>
  );
};

export default layout;
