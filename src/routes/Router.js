import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail.js";
import Main from "../pages/Main";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<div>이거 404 페이지요</div>} />
      </Routes>
    </>
  );
};

export default Router;
