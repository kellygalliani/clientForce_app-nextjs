import { useState } from "react";
import { MainRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { AuthProvider } from "./providers/AuthProvider.tsx";

export function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </>
  );
}
