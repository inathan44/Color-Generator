import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// When the reducer has a payload/action make sure to add
// PayloadAction<TYPEHERE> as the type of the action

interface Pallete {
  main: string;
  secondary: string;
  third: string;
  fourth: string;
  fifth: string;
}

const initialState: Pallete = {
  main: "#fff",
  secondary: "#fff",
  third: "#fff",
  fourth: "#fff",
  fifth: "#fff",
};

const paletteSlice = createSlice({
  name: "palette",
  initialState,
  reducers: {
    generatePallete(state): void {
      state.main = "#" + Math.random().toString(16).slice(2, 8);
      state.secondary = "#" + Math.random().toString(16).slice(2, 8);
      state.third = "#" + Math.random().toString(16).slice(2, 8);
      state.fourth = "#" + Math.random().toString(16).slice(2, 8);
      state.fifth = "#" + Math.random().toString(16).slice(2, 8);
    },
  },
});

export const {} = paletteSlice.actions;

export default paletteSlice.reducer;
