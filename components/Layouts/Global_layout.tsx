import React from "react";
import Navbar from "@components/Navbar/Navbar.component";
import { QueryProvider } from "@contexts/react query/reactQuery";
import { UserProvider } from "@contexts/userContext";
import { CartProvider } from "@contexts/cartContext";
import { GlobalStateProvider } from "@contexts/globalStateContext";
import { Toaster } from "react-hot-toast";
import ProductModal from "@components/ProductModal/ProductModal.component";
import RootStyleLoader from "@styles/modernwalk/root-style-loader.utility";
type Props = {
  children: React.ReactNode;
  name?: string;
};

const Layout: React.FC<Props> = ({ children, name }) => {
  console.log("layout", name);

  return (
    <QueryProvider>
      <GlobalStateProvider>
        <CartProvider>
          <UserProvider>
            <Toaster />
            <ProductModal />
            <RootStyleLoader />
            <Navbar name={name ? name : ""} />
            {children}
          </UserProvider>
        </CartProvider>
      </GlobalStateProvider>
    </QueryProvider>
  );
};

export default Layout;
