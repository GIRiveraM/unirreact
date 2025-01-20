import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import TodoPlatillos from "./Components/Platillos/TodosPlatillos";
import Login from "./Components/Login/Login";
import {  Route, Routes } from "react-router-dom";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [value, setValue] = useState("");
      
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // Leer el valor inicial de localStorage cuando el componente se monte
  useEffect(() => {
    const storedValue = localStorage.getItem("myValue");
    if (storedValue) {
      setValue(storedValue); // Recupera el valor
    }
  }, []);

   // Guardar el valor en localStorage cuando cambie
   useEffect(() => {
    localStorage.setItem("myValue", value);
  }, [value]);
 
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}  isLoggedIn = { value }/>
      <main>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/menu">
            <Route index element={<TodoPlatillos />}/>
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
