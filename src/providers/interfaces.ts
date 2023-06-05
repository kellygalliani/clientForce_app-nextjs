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
  signOut: () => void;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface iContactsProviderProps {
  children: ReactNode;
}

export interface ContactsContextValues {
  handleCloseModal: () => void;
  handleOpenModal: (type: string) => void;
  modalOpen: boolean;
  modalType: string;
  createContact: (data: any) => void;
  contacts: never[];
  setContacts: React.Dispatch<React.SetStateAction<never[]>>;
}

interface Email {
  email: string;
  id: string;
  isPrimary: boolean;
}

interface Phone {
  id: string;
  phone: string;
}

export interface User {
  avatar: string;
  contacts: any[];
  createdAt: string;
  email: Email[];
  id: string;
  isActive: boolean;
  isAdmin: boolean;
  name: string;
  phone: Phone[];
}
