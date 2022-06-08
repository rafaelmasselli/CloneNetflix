import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Register from "./pages/Register/index";
import View from "./pages/view/index";
import Detalhes from "./pages/Detalhes/index";
import Usuario from "./pages/usuario/index";

import RegisterCreate from "./pages/Register,Create/index";
import axios from "axios";

axios.defaults.baseURL = "https://streaming-api-1.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Register />} />
        <Route path="/Create" element={<RegisterCreate />} />
        <Route path="/filmes" element={<View />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </div>
  );
}

export default App;
