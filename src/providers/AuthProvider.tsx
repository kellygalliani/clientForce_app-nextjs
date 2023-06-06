import { createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/schema";
import { AuthContextValues, User, iAuthProviderProps } from "./interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/Register/schema";
import { toast } from "react-toastify";
import { useContacts } from "../hooks/useAuth";

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const { handleOpenModal } = useContacts();
  useEffect(() => {
    const token = localStorage.getItem("clientForce:token");
    if (!token) {
      setLoading(false);
      return;
    }
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setLoading(false);
  }, []);

  /* const signIn = async (data: LoginData) => {
    try {
      const responsePromise = api.post("/login", data);
      toast.promise(responsePromise, {
        pending: "Fazendo o login...",
        success: "Login realizado com sucesso 👌",
        error: "Não foi possível logar, verifique seus dados 🤯",
      });
      const response = await responsePromise;
      const { token } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("clientForce:token", token);

      navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  }; */
  const signIn = async (data: LoginData) => {
    try {
      const responsePromise = api.post("/login", data);
      toast.promise(responsePromise, {
        pending: "Fazendo o login...",
        success: "Login realizado com sucesso 👌",
        error: "Não foi possível logar, verifique seus dados 🤯",
      });
      const response = await responsePromise;

      const { token } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("clientForce:token", token);

      const userResponse = await api.get("/users");
      const user = userResponse.data;

      if (!user.isActive) {
        await api.patch(`/users/${user.id}`, { isActive: true });
      }

      navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (data: RegisterData) => {
    try {
      const responsePromise = api.post("/users", data);
      toast.promise(responsePromise, {
        pending: "Registrando...",
        success: "Registro realizado com sucesso 👌",
        error: "Não foi possível registrar, tente novamente 🤯",
      });
      await responsePromise;

      navigate("");
    } catch (error) {
      console.error(error);
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
