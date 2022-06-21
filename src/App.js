import "./styles.css";
import Cartt from "./Cart";
import Home from "./Home";
import Header from "./Header";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cartt />} exact />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
