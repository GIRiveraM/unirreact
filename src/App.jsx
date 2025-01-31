import { useState  } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import TodoPlatillos from "./Components/Platillos/TodosPlatillos";
import Login from "./Components/Login/Login";
import {  Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <AuthProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler}  />
        <main>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/menu">
              <Route index element={<TodoPlatillos /> }/>
            </Route>
          </Routes>
        </main>
      </AuthProvider>
    </>
  );
}

export default App;
