import React, { useEffect, useState } from "react";
import { Task } from "./interfaces";
import { api } from "../../services/api";
import { Header } from "../../components/Header";

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
      <div>
        <p>{}</p>
      </div>
    </>
  );
};
