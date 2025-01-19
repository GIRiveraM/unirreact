import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/index.jsx";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";


let persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
