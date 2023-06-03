import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/schema";
import { AuthContextValues, iAuthProviderProps } from "./interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/Register/schema";

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("clientForce:token");
    if (!token) {
      setLoading(false);
      return;
    }
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      console.log(response);
      const { token } = response.data;

      api.defaults.headers.common.authorization /* injetar o token em todas as requisições */ = `Bearer ${token}`;
      localStorage.setItem("clientForce:token", token);

      navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  const signUp = async (data: RegisterData) => {
    console.log(data);
    try {
      const response = await api.post("/users", data);
      console.log(response);
      navigate("login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
