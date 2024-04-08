"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { ReactNode } from "react";
const Context = createContext<ContextType>({
  user: {
    user: {
      _id: "",
      username: "",
      name: "",
      password: "",
    },
    isLoggedUser: false,
  },
  setUser: () => {},
  updateTask: () => {},
});

export interface User {
  _id: string;
  username: string;
  name: string;
  password: string;
}

export type UserLogged = {
  user: User;
  isLoggedUser: boolean;
};

interface ContextType {
  user: UserLogged;
  setUser: React.Dispatch<React.SetStateAction<UserLogged>>;
  updateTask: (newUser: User, isLogged: boolean) => void;
}

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const initialLogged = {
    user: {
      _id: "",
      username: "",
      name: "",
      password: "",
    },
    isLoggedUser: false,
  };
  const [user, setUser] = useState<UserLogged>(initialLogged);

  const updateTask = (newUser: User, isLogged: boolean) => {
    setUser({ user: newUser, isLoggedUser: isLogged });
    sessionStorage.setItem(
      "user",
      JSON.stringify({ user: newUser, isLoggedUser: isLogged })
    );
  };

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div className="h-screen flex w-full justify-center items-center bg-darkBlue">
        Loading...
      </div>
    );
  }
  return (
    <Context.Provider value={{ user, setUser, updateTask }}>
      {loading && (
        <div className="h-screen flex w-full justify-center items-center bg-darkBlue">
          Loading...
        </div>
      )}
      {!loading && children}
    </Context.Provider>
  );
};

export const useUserContext = () => useContext(Context);

export default AuthProvider;
