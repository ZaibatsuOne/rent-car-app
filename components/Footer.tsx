import FooterColumn from "./FooterColumn";
import { FC } from "react";
import { footerColumn as footerList } from "@/data/data";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col gap-9 pb-[60px] pt-20 mt-14">
      <section className="flex justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-primary500 font-bold text-[32px]">MORENT</span>
          <p className="max-w-[292px] text-secondary400">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex gap-14">
          {footerList.map((footerItem) => (
            <FooterColumn footerItem={footerItem} />
          ))}
        </div>
      </section>
      <div className="w-full h-[1px] bg-secondary500" />
      <div className="flex justify-between font-semibold">
        <span>©2022 MORENT. All rights reserved</span>
        <div className="flex gap-12">
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
