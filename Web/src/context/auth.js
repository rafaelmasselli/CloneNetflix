import { createContext, useEffect, useState } from "react";
import { api } from "../lib/api";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);

  async function signIn(GithubCode) {
    const response = await api.post("/login", {
      code: GithubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem("token", token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("token");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get("/profile").then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  useEffect(() => {
  }, []);

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
