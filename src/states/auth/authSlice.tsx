import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: object;
  token: string;
}

const initialState: AuthState = {
  user: {},
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<{ user: object }>) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = {};
      state.token = "";
    },
  },
});
export default authSlice.reducer;
export const { setToken, setUser, logout } = authSlice.actions;
