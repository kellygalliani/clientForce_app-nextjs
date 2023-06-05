import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Register } from "../pages/Register/index ";
import { ContactsProvider } from "../providers/ContactsProvider";
import { SearchValueProvider } from "../providers/SearchValueContext";

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
              <SearchValueProvider>
                <Dashboard />
              </SearchValueProvider>
            </ContactsProvider>
          }
        />
      </Route>
    </Routes>
  );
};
