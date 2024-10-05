"use client";

import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import {
  privateInstance,
  updatePrivateAxiosInstance,
} from "@/configs/axiosConfig";
import { useRouter } from "next/navigation";

export const AuthStoreContext = createContext<{
  isAuthenticated: boolean;
  user: {
    id: number;
    name: string;
    email: string;
    avatar: string;
  } | null;
  getUser: () => void;
  login: (token: string, user: any) => void;
  logOut: () => void;
}>({
  isAuthenticated: false,
  user: null,
  getUser: () => {},
  login: () => {},
  logOut: () => {},
});

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthStoreProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = Cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME as string);
  const [user, setUser] = useState(null);
  const { push } = useRouter();
  const getUser = async () => {
    try {
      const response = await privateInstance.get("/auth/me");
      const data = await response.data;
      setUser(data);
      setIsAuthenticated(true);
    } catch (error) {}
  };

  const login = (token: string, user: any) => {
    updatePrivateAxiosInstance(token);
    Cookies.set(process.env.NEXT_PUBLIC_TOKEN_NAME as string, token);
    setIsAuthenticated(true);
    setUser(user);
  };
  const logOut = async () => {
    try {
      const response = await privateInstance.post("/auth/logout");
      const data = await response.data;
      if (data) {
        setUser(null);
        setIsAuthenticated(false);
        Cookies.remove(process.env.NEXT_PUBLIC_TOKEN_NAME as string);
        push("/login");
      }
    } catch (error) {}
  };
  useEffect(() => {
    if (token) {
      if (!isAuthenticated) {
        updatePrivateAxiosInstance(token);
        getUser();
      }
    } else {
    }
  }, [isAuthenticated, token]);

  return (
    <AuthStoreContext.Provider
      value={{ isAuthenticated, login, user, getUser, logOut }}
    >
      {children}
    </AuthStoreContext.Provider>
  );
};

export const useAuthStore = () => {
  return useContext(AuthStoreContext);
};
