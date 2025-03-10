import { createContext, useState } from "react";
import { useNavigate } from "react-router";

interface AuthContextType {
  token: string | null;
  setToken: (token: string) => void;
  handleLogout: () => void;
  handleLogin: (token: string) => void;
}

//create a context with default values
const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {}, //empty function
  handleLogout: () => {}, //empty function
  handleLogin: () => {},
});

//children is a special prop that holds all the children (consumer) components
const AuthProvider: any = ({ children }: any) => {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState<string | null>(storedToken ?? null);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    const navigate = useNavigate();
    navigate("/login");
  };

  const handleLogin = (token: string) => {
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, handleLogout, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
