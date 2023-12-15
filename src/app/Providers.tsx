"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers = ({ children }: ProvidersProps) => {
  return (
    <SnackbarProvider
      preventDuplicate
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      autoHideDuration={5000}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SnackbarProvider>
  );
};

export default Providers;
