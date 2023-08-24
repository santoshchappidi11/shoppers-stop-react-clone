import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MultipleProducts from "./components/Products/MultipleProducts";
import SingleProduct from "./components/Products/SingleProduct";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <i class="fa-solid fa-bag-shopping"></i> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/multiple-products" element={<MultipleProducts />} />
        <Route exact path="/single-product/:id" element={<SingleProduct />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
