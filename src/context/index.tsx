import React, { createContext, useState } from "react";
import { contextInterface } from "../@types";

export const AppContext = createContext<contextInterface | null>(null);

interface Props {
  children: React.ReactNode;
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<boolean>(false);

  const value: contextInterface = {
    isLoggedIn: state,
    setAuth: setState,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
