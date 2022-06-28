import { Routes, Route } from "react-router-dom";
import axios from "axios"


import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import View from "./pages/view";
import Detalhes from "./pages/Detalhes";
import User from "./pages/User";
import CreateUser from "./pages/CreateUser/index";

axios.defaults.baseURL = "http://localhost:3333/";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Create" element={<CreateUser />} />
        <Route path="/Movies" element={<View />} />
        <Route path="/User" element={<User />} />
        <Route path="/detail/:id" element={<Detalhes />} />
      </Routes>
    </div>
  );
}

export default App;
