import { createContext, useEffect, useState } from "react";
import { api } from "../lib/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const Login = async (email, password) => {
    await api
      .post("/auth/login", { email, password })
      .then(async (response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/User");
      })
      .catch((err) => {
        const { data } = err.response;
        console.log(data.message);
      });
  };

  function signOut() {
    setUser(null);
    localStorage.removeItem("token");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get("/auth/profile").then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ Login, user, signOut}}>
      {props.children}
    </AuthContext.Provider>
  );
}
