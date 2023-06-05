import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Register } from "../pages/Register/index ";
import { ContactsProvider } from "../providers/ContactsProvider";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <ContactsProvider>
              <Dashboard />
            </ContactsProvider>
          }
        />
      </Route>
    </Routes>
  );
};
