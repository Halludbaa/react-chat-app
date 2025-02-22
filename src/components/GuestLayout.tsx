import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../states/store";

export default function GuestLayout() {
  const token = useSelector((state: RootState) => state.auth.token);
  return !token ? <Outlet /> : <Navigate to="/" replace />;
}
