import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeRef: null,
  aboutRef: null,
  PackageRef: null,
  ContactRef: null,
};

export const refSlice = createSlice({
  name: "refC",
  initialState,
  reducers: {
    PackageRef: (state, actions) => {
      state.PackageRef = actions.payload;
    },
    aboutRef: (state, actions) => {
      state.aboutRef = actions.payload;
    },
    contacRef: (state, actions) => {
      state.ContactRef = actions.payload;
    },
  },
});
export const { PackageRef, aboutRef, contacRef } = refSlice.actions;
export default refSlice.reducer;
