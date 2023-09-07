import { IFooter } from "@/types/types";
import Link from "next/link";
import { FC } from "react";

interface Props {
  footerItem: IFooter;
}
const FooterColumn: FC<Props> = ({ footerItem }) => {
  return (
    <nav className="gap-7 flex flex-col">
      <h3 className="lg:text-xl font-semibold capitalize">
        {footerItem.title}
      </h3>
      <ul className="text-secondary400 flex flex-col gap-5">
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
