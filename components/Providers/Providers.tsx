"use client";

import { ReactNode, useState } from "react";
import { CookiesProvider } from "react-cookie";
import { SessionProvider } from "next-auth/react";
import { queryClientOptions } from "@/utils";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <SessionProvider>
          <Theme>{children}</Theme>
        </SessionProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export default Providers;
