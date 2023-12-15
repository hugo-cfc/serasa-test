"use client";

import { parseCookies, destroyCookie } from "nookies";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  useEffect,
} from "react";

import getProfile from "@/fetchers/auth/getProfile";

type CookiesData = {
  id: string;
  name: string;
  email: string;
};

interface ContextProps {
  user: CookiesData | null;
  setUser: Dispatch<SetStateAction<CookiesData | null>>;
}

const AuthContext = createContext<ContextProps>({
  user: null,
  setUser: (): CookiesData | null => null,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState<CookiesData | null>(null);

  useEffect(() => {
    const { "serasa-test.token": token } = parseCookies();

    if (token) {
      const userDate: CookiesData = JSON.parse(atob(token));

      getProfile(userDate.id)
        .then((profile) => {
          setUser(profile);
        })
        .catch(() => {
          enqueueSnackbar("Erro ao obter perfil", { variant: "error" });

          destroyCookie(undefined, "serasa-test.token");

          router.push("/");
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
