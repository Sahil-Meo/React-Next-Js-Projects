import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const [isLogin, setIsLogin] = useState(false); // true = login form, false = register form
     const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

     useEffect(() => {
          const savedUser = localStorage.getItem("user");
          if (savedUser) {
               setUser(JSON.parse(savedUser));
          }
          setLoading(false);
     }, []);

     // Login function
     const login = async (email, password) => {
          try {
               // Example API call
               // const res = await axios.post("/api/login", { email, password });
               // const { user, token } = res.data;

               const userData = { id: 1, email, role: "user" }; // Dummy user
               setUser(userData);
               localStorage.setItem("user", JSON.stringify(userData));

               closeModal(); // Auto close modal
               return true;
          } catch (err) {
               console.error("Login failed:", err);
               return false;
          }
     };

     // Logout function
     const logout = () => {
          setUser(null);
          localStorage.removeItem("user");
     };

     // Register function
     const register = async (formData) => {
          try {
               // Example API call
               // await axios.post("/api/register", formData);

               console.log("User registered:", formData);

               // (Optional) auto-login after register
               const userData = { id: 2, email: formData.email, role: "user" };
               setUser(userData);
               localStorage.setItem("user", JSON.stringify(userData));

               closeModal(); // Auto close modal
               return true;
          } catch (err) {
               console.error("Register failed:", err);
               return false;
          }
     };

     // Modal controls
     const openModal = () => {
          setIsAuthModalOpen(!isAuthModalOpen);
          console.log(isLogin, isAuthModalOpen);

     };

     const closeModal = () => setIsAuthModalOpen(false);

     return (
          <AuthContext.Provider
               value={{
                    user,
                    login,
                    logout,
                    register,
                    loading,
                    isLogin,
                    setIsLogin,
                    isAuthModalOpen,
                    openModal,
                    closeModal,
               }}
          >
               {children}
          </AuthContext.Provider>
     );
};
