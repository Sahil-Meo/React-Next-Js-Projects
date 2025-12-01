import { createContext } from "react";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {







     return (
          <DashboardContext.Provider value={{}}>
               {children}
          </DashboardContext.Provider>
     )
}