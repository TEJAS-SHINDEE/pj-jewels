import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function Shop() {
  return <div>Shop</div>;
}

function Cart() {
  return <div>Cart</div>;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;