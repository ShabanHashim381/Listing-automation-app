import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginCallApi } from "../helpers/BackendHelper";
import { themeToast } from "../components/UI/ThemeToaster";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ LOGIN SERVICE ONLY
  const loginService = async (credentials) => {
    try {
      setLoading(true);
      const { data, token } = await loginCallApi(credentials);

      if (token) {
        localStorage.setItem("token", token);
      }
      setUser(data);
      themeToast.success("Login successful!");

      // Navigate after successful login
      navigate("/dashboard");
      return { data, token };
    } catch (error) {
      console.error("Login failed", error);
      themeToast.error(error?.response?.data?.message || "Login failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGOUT (optional for completeness)
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    themeToast.info("Logged out");
    navigate("/auth/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginService,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
