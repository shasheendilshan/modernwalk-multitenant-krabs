import React from "react";
import Navbar from "@components/Navbar/Navbar.component";
import { QueryProvider } from "@contexts/react query/reactQuery";
import { UserProvider } from "@contexts/userContext";
import { CartProvider } from "@contexts/cartContext";
import { GlobalStateProvider } from "@contexts/globalStateContext";
import { Toaster } from "react-hot-toast";
import ProductModal from "@components/ProductModal/ProductModal.component";
import RootStyleLoader from "@styles/rarebeauty/root-style-loader.utility";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <QueryProvider>
      <GlobalStateProvider>
        <CartProvider>
          <UserProvider>
            <Toaster />
            <ProductModal />
            <RootStyleLoader />
            <Navbar name="Rare Beauty" />
            {children}
          </UserProvider>
        </CartProvider>
      </GlobalStateProvider>
    </QueryProvider>
  );
};

export default Layout;
