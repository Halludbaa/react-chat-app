import { logout, setToken } from "../states/auth/authSlice";
import { store } from "../states/store";
import API from "./api";

const refresh = async (): Promise<[string | null, object | null]> => {
  try {
    const res = await API.post("/api/_refresh");
    const newToken: string = res.data.data.access_token;
    const user: object = res.data.data.user;

    if (!newToken) {
      throw new Error("No access token received");
    }
    store.dispatch(setToken(newToken));
    return [newToken, user];
  } catch (err) {
    store.dispatch(logout());
    return [null, null];
  }
};

export default refresh;
11;
