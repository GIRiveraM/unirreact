import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import TodoPlatillos from "./Components/Platillos/TodosPlatillos";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [user, setUser] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const userLogin = () => {
    setUser()
  }

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onShowLogout ={ user } />
      <main>
        <Routes>
          <Route path="/" element={<Login  />} />  
          <Route path="/menu" element={<TodoPlatillos />} />
          <Route path="/*" element={<Navigate to="/menu" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
