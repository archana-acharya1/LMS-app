import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext.tsx";
import { BooksProvider } from "./context/BooksContext.tsx";
import { MembersProvider } from "./context/MemberContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <MembersProvider>
        <BooksProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BooksProvider>
      </MembersProvider>
    </AuthProvider>
  </StrictMode>
);
