import { Heart, Bell, Settings } from "lucide-react";
import { FC } from "react";

const UserAccountNav: FC = () => {
  return (
    <div className="flex gap-7 items-center text-secondary400">
      <span className="hidden lg:flex gap-7 items-center">
        <Heart absoluteStrokeWidth />
        <Bell />
        <Settings />
      </span>
      <div className="rounded-full h-11 w-11 bg-secondary600" />
    </div>
  );
};

export default UserAccountNav;
