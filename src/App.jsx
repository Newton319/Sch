import "./App.css";
import Us from "./Components/Us";
import Cus from "./Components/Cus";

import Class from "./Components/Class";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Us />} />
        <Route path="/Classes" element={<Class />} />

        <Route path="/Contactus" element={<Cus />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
