import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useMemo,
} from "react";

import { IUser } from "@interfaces/users/users.interfaces";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserInLocalStorage,
} from "@utils/localStorage";

interface IUserContext {
  user: IUser | null;
  test: string;
  setUserDetails: (user: IUser) => void;
  removeUserDetails: () => void;
}

export const UserContext = createContext<IUserContext | null>(null);

type Props = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [test, setTest] = useState<string>("test user context");

  useEffect(() => {
    const getUser = () => {
      const userDetails = getUserFromLocalStorage();
      if (userDetails) {
        setUser(userDetails);
      }
    };
    getUser();
  }, []);

  const setUserDetails = (user: IUser) => {
    setUser(user);
    console.log("user set successfully");
    setUserInLocalStorage(user);
  };
  const removeUserDetails = () => {
    setUser(null);
    removeUserFromLocalStorage();
  };

  const data = useMemo(() => {
    return {
      user,
      test,
      setUserDetails,
      removeUserDetails,
    };
  }, [user]);

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};

export { UserProvider, useUserContext };
