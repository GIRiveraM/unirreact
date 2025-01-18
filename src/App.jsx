import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import TodoPlatillos from "./Components/Platillos/TodosPlatillos";
import Login from "./Components/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";

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
    setUser();
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onShowLogout={user} />
      <main>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/menu">
            <Route index element={<TodoPlatillos />}/>
          </Route>
        </Routes>

       {/*  <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="menu" element={<TodoPlatillos />} />
          <Route path="/*" element={<Navigate to="/menu" />} />
        </Routes> */}
      </main>
    </>
  );
}

export default App;
