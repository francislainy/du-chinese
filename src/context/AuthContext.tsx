import { createContext, useState, FC, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  credentials?: { username: string; password: string };
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<
    { username: string; password: string } | undefined
  >(undefined);

  const login = (username: string, password: string) => {
    setCredentials({ username, password });
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setCredentials(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, credentials }}
    >
      {children}
    </AuthContext.Provider>
  );
};
