import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: React.ReactNode;
};

// Create a client
const queryClient = new QueryClient();

export const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
