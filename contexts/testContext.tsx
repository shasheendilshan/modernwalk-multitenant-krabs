import { createContext } from "react";
import { useContext } from "react";

type TestContextType = {
  user: string;
};

const TestContext = createContext<TestContextType>({ user: "shasheen" });

type Props = {
  children: React.ReactNode;
};

export const TextContextProvider = ({ children }: Props) => {
  const value = {
    user: "shasheen",
  };

  return (
    <>
      <TestContext.Provider value={value}>{children}</TestContext.Provider>
    </>
  );
};

export const useTestContext = () => {
  return useContext(TestContext);
};
