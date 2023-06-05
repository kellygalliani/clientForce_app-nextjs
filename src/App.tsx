import { MainRoutes } from "./routes";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </>
  );
}
