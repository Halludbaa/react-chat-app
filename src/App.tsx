import { Route, Routes } from "react-router";
import DashboardPage from "./pages/DashboardPage";
import HelloWorld from "./pages/HelloWorld";
import AuthLayout from "./components/AuthLayout";
import LoginPage from "./pages/AuthPage/LoginPage";
import GuestLayout from "./components/GuestLayout";
import { useAuth } from "./hooks/useAuth";

function App() {
  useAuth();
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/hello-world" element={<HelloWorld />} />
      </Route>

      <Route element={<GuestLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
