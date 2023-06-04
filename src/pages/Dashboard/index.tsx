import React, { useEffect, useState } from "react";
import { Task } from "./interfaces";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { MainStyled } from "./styles";
import { SearchInput } from "../../components/SearchInput";
import { ContactsSession } from "../../components/ContactsSession";
import { BigButtonBrand } from "../../styles/ButtonStyle";

export const Dashboard = () => {
  const [contacts, setContacts] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/users");
    })();
  }, []);
  return (
    <>
      <Header />
      <MainStyled>
        <SearchInput />
        <div className="button_session">
          <BigButtonBrand>Cadastrar Contato</BigButtonBrand>
        </div>
        <ContactsSession />
      </MainStyled>
    </>
  );
};
