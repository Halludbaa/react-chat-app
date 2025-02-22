import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/tailwind.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HelloWorld from "./pages/HelloWorld.tsx";
import { Provider } from "react-redux";
import LoginPage from "./pages/AuthPage/LoginPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import AuthLayout from "./components/AuthLayout.tsx";
import { store } from "./states/store.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />

        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/hello-world" element={<HelloWorld />} />
        </Route>

        <Route>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
