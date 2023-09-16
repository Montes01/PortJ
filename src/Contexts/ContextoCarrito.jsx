import React, { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <Context.Provider value={{ counter, setCounter }}>
      {children}
    </Context.Provider>
  );
};
