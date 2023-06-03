import { ReactNode } from "react";
import { LoginData } from "../pages/Login/schema";
import { RegisterData } from "../pages/Register/schema";

export interface iAuthProviderProps {
  children: ReactNode;
}

export interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
  signUp: (data: RegisterData) => void;
}
