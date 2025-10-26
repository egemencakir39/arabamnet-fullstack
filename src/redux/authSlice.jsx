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
    const res = await axios.post(`${API_URL}/auth/login`, loginData, {
      withCredentials: true,
    });

    return res.data;
  }
);

//logout
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/api/auth/logout");
      return null;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Çıkış başarısız");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
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
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // LOGOUT
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.token = null;
    });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
