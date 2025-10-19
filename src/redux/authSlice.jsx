import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

//register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    const res = await axios.post(`${API_URL}/auth/register`, userData);
    return res.data;
  }
);

//login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData) => {
    const res = await axios.post(`${API_URL}/auth/login`, loginData);

    const { token, user } = res.data;
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user",JSON.stringify(user));
    }
    return res.data;
  }
);

//logout
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("user")) || null
        : null,
    token:
      typeof window !== "undefined"
        ? localStorage.getItem("token") || null
        : null,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export default authSlice.reducer;
