import { Route, Routes } from "react-router-dom";
import Home from "../src/component/Home";
import RestroMenu from "./component/RestroMenu";
import Nav from "./component/Nav";
import Aboutus from "./component/Partials/Aboutus";

import AddToCart from "./component/AddToCart";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/restaurant/:id" element={<RestroMenu/>}/>
        <Route path="/cart" element={<AddToCart/>}/>
      </Routes>
    </>
  );
}

export default App;
