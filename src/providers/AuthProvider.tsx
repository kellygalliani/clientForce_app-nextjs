import { createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/schema";
import { AuthContextValues, User, iAuthProviderProps } from "./interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/Register/schema";
import { toast } from "react-toastify";

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

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
      /* toast.info("Login está sendo feito..."); */
      const response = await api.post("/login", data);
      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("clientForce:token", token);

      /* toast.success("Login realizado com sucesso!"); */
      navigate("dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao realizar login.");
    }
  };

  const signUp = async (data: RegisterData) => {
    try {
      /* toast.info("Registrando seu cadastro..."); */
      const response = await api.post("/users", data);

      /* toast.success("Registro realizado com sucesso!"); */
      navigate("");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao realizar registro.");
    }
  };

  const signOut = () => {
    localStorage.removeItem("clientForce:token");
    delete api.defaults.headers.common.authorization;
    navigate("");
  };

  return (
    <AuthContext.Provider
      value={{ signIn, loading, signUp, signOut, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
