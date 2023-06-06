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
  create: (data: any) => void;
  edit: (data: any, idItem: string) => void;
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  currentContact: Contact | undefined;
  setCurrentContact: React.Dispatch<React.SetStateAction<Contact | undefined>>;
  currentItem: string;
  setCurrentItem: React.Dispatch<React.SetStateAction<string>>;
  deleteItem: (idItem: string, type: string) => void;
  editUser: (data: UserDataEdit, userId: string) => void;
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

interface UserContact {
  user_id: string;
}

export interface Contact {
  UserContact: UserContact[];
  createdAt: string;
  emails: Email[];
  id: string;
  name: string;
  phones: Phone[];
}

export interface UserData {
  avatar?: string;
  contacts?: any[];
  email?: Email[];
  name?: string;
  phone?: Phone[];
}

export interface UserDataEdit {
  avatar?: string;
  email?: string;
  name?: string;
  phone?: string;
}
