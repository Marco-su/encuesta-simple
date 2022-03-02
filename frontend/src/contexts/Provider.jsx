import { createContext } from "react";
import EncuestasStates from "./EncuestasStates";

const Context = createContext({});

export function ContextProvider({ children }) {
  return (
    <Context.Provider value={{ ...EncuestasStates() }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
