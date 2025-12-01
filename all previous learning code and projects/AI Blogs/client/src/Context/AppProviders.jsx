import { AuthProvider } from "./AuthContext";
import { DashboardContextProvider } from "../pages/Dashboard/Context";


export  const AppProvider = ({ children }) => {
     return (
          <AuthProvider>
               <DashboardContextProvider>
                    {children}
               </DashboardContextProvider>
          </AuthProvider>
     )
}