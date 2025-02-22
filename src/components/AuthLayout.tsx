import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (await isAuthenticated) {
        navigate("/login", { replace: true });
      }
    })();
  }, []);
  return <Outlet />;
}
