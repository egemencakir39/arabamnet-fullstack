import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

//get
export const getCars = createAsyncThunk("cars/getCars", async () => {
  const res = await axios.get(`${API_URL}/cars`);
  return res.data;
});

//get(id)
export const getCarById = createAsyncThunk("cars/getCarById", async (id) => {
  const res = await axios.get(`${API_URL}/cars/${id}`);
  return res.data;
});

//create
export const createCar = createAsyncThunk(
  "cars/createCar",
  async (formData) => {
    const res = await axios.post(`${API_URL}/cars`, formData);
    return res.data;
  }
);

//delete
export const deleteCarById = createAsyncThunk(
  "cars/deleteCarById",
  async (id) => {
    const res = await axios.delete(`${API_URL}/cars/${id}`);
    return res.data;
  }
);

//patch
export const updateCarById = createAsyncThunk(
  "cars/updateCarById",
  async ({ id, updatedData }) => {
    const res = await axios.patch(`${API_URL}/cars/${id}`, updatedData);
    return res.data;
  }
);

const carSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedCar:{},
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      //get
      .addCase(getCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //get(id)
      .addCase(getCarById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCar = action.payload;
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //create
      .addCase(createCar.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCar.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload);
      })
      .addCase(createCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //delete
      .addCase(deleteCarById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((car) => car._id !== action.payload);
      })
      .addCase(deleteCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //patch
      .addCase(updateCarById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map((car) =>
          car._id === action.payload._id ? action.payload : car
        );
      })
      .addCase(updateCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carSlice.reducer;
