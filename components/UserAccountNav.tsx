import Link from "next/link";
import { authOptions } from "@/services/auth.service";
import { Bell, Heart, LogOut, LogIn } from "lucide-react";
import { Flex, Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";

const UserAccountNav = async () => {
  const session = await getServerSession(authOptions);
  const fullName = session?.user?.name;
  const firstName = fullName ? fullName.split(" ")[0] : "";

  return (
    <div className="flex gap-7 items-center text-secondary400">
      <span className="hidden lg:flex gap-7 items-center">
        <Link href="/favorite">
          <Heart />
        </Link>
        <Bell />
        {session?.user ? (
          <Link href="/api/auth/signout">
            <LogOut className="text-error600" />
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <LogIn className="text-success600" />
          </Link>
        )}
      </span>
      <Flex gap="4" align="center">
        <Text>{firstName}</Text>
        {session?.user?.image ? (
          <Link href="/api/auth/signout">
            <img src={session.user.image} className="w-11 h-11 rounded-full" />
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <img
              src="/avatars/emptyAvatar.jpg"
              className="w-11 h-11 rounded-full"
            />
          </Link>
        )}
      </Flex>
    </div>
  );
};

export default UserAccountNav;
