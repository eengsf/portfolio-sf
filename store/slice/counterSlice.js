import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbar: "Home",
  burger: false,
  theme: true,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    setNavbar(state, action) {
      state.navbar = action.payload;
    },
    setBurger(state) {
      state.burger = !state.burger;
    },
    setTheme(state) {
      state.theme = state.theme;
    },
  },
});

export const { setNavbar, setBurger, setTheme } = counterSlice.actions;
