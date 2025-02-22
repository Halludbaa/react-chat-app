import { useDispatch, useSelector } from "react-redux";
import API from "../services/api";
import { RootState } from "../states/store";
import { logout, setToken, setUser } from "../states/auth/authSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import refresh from "../services/refresh";

type UserRequest = {
  username: string;
  password: string;
};

export function useAuth() {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshToken = async () => {
      const [newToken, user] = await refresh();
      if (!newToken || !user) {
        dispatch(logout());
        return;
      }

      dispatch(setToken(newToken));
      dispatch(setUser({ user }));
    };
    refreshToken();
  }, []);

  const isAuthenticated = () => !token;

  const login = async (request: UserRequest) => {
    try {
      const res = await API.post("/api/_login", {
        username: request.username,
        password: request.password,
      });

      dispatch(setToken(res.data.data.access_token));
      navigate("/dashboard", { replace: true });
      return res.data;
    } catch (err: any) {
      console.info(err);
      if (err.response) {
        console.info(err.response.data);
        return err.response.data;
      }
    }
  };

  return { login, isAuthenticated };
}
