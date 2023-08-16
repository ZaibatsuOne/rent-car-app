import { IFooter } from "@/types/types";
import Link from "next/link";
import { FC } from "react";

interface Props {
  footerItem: IFooter;
}
const FooterColumn: FC<Props> = ({ footerItem }) => {
  return (
    <nav className="flex flex-col gap-7">
      <h3 className="font-semibold text-xl capitalize">{footerItem.title}</h3>
      <ul className="flex flex-col gap-5 text-secondary400">
        {footerItem.subtitle.map((item) => (
          <Link href={item.link} key={item.link}>
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default FooterColumn;
