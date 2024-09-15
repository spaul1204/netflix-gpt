import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    selectedLanguage: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
