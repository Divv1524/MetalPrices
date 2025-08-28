// src/redux/slices/metalsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const METAL_NAMES = ["gold", "silver", "platinum", "palladium"];

const metalsSlice = createSlice({
  name: 'metals',
  initialState: {
    data: [],
    loading: METAL_NAMES.reduce((acc, m) => ({ ...acc, [m]: false }), {}),
    error: METAL_NAMES.reduce((acc, m) => ({ ...acc, [m]: null }), {}),
  },
  reducers: {
    fetchMetalsRequest: (state, action) => {
      const metalName = action.payload;
      state.loading[metalName] = true;
      state.error[metalName] = null;
    },
    fetchMetalSuccess: (state, action) => {
      const { metalName, metalData } = action.payload;
      state.loading[metalName] = false;
      const index = state.data.findIndex(m => m.name.toLowerCase() === metalName);
      if (index !== -1) state.data[index] = metalData;
      else state.data.push(metalData);
    },
    fetchMetalFailure: (state, action) => {
      const { metalName, error } = action.payload;
      state.loading[metalName] = false;
      state.error[metalName] = error;
    },
  },
});

export const { fetchMetalsRequest, fetchMetalSuccess, fetchMetalFailure } = metalsSlice.actions;
export default metalsSlice.reducer;
