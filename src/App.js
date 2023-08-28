import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Aplication from "./components/Aplication";
import Home from "./components/Home";
import Login from "./components/Login";
import Pets from "./components/Pets";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>

          <Route path="pets" element={<Pets />}></Route>
          <Route path="aplication" element={<Aplication />}></Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
