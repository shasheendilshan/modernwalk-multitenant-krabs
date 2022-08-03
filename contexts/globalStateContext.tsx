import React, {
  useState,
  createContext,
  useMemo,
  useContext,
  useEffect,
} from "react";

import { IProduct } from "../interfaces/products/products.interfaces";
import {
  getTenantFromLocalStorage,
  setTenantInLocalStorage,
} from "./../utils/localStorage";

interface IGlobalStateContext {
  product: IProduct | null;
  productModalState: boolean;
  showModal: (state: boolean) => void;
  setProductDetails: (product: IProduct) => void;
  tenantId?: string | null;
  setTenant: (id: string) => void;
}

type Props = {
  children: React.ReactNode;
  tenant_Id?: string | null | undefined;
};

export const GlobalStateContext = createContext({} as IGlobalStateContext);

const GlobalStateProvider = ({ children, tenant_Id }: Props) => {
  const [productModalState, setProductModalState] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [tenantId, setTenantId] = useState<string | null | undefined>(
    tenant_Id
  );

  // useEffect(() => {
  //   const getTenantId = () => {
  //     const TenantDetails = getTenantFromLocalStorage();
  //     console.log("TenantDetails", TenantDetails);
  //     if (TenantDetails) {
  //       setTenant(TenantDetails);
  //     }
  //   };
  //   getTenantId();
  // }, []);

  const showModal = (state: boolean) => {
    setProductModalState(state);
  };

  const setProductDetails = (productData: IProduct) => {
    setProduct(productData);
  };

  const setTenant = (id: string) => {
    setTenantId(id);
    // setTenantInLocalStorage(id);
    console.log("tenant set completed");
  };

  const data = useMemo(() => {
    return {
      productModalState,
      product,
      showModal,
      setProductDetails,
      tenantId,
      setTenant,
    };
  }, [productModalState, product]);

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalStateProvider"
    );
  }

  return context;
};

export { GlobalStateProvider, useGlobalContext };
