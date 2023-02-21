import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { RootState } from "./store";

// When the reducer has a payload/action make sure to add
// PayloadAction<TYPEHERE> as the type of the action

interface Pallete {
  main: string;
  secondary: string;
  third: string;
  fourth: string;
  fifth: string;
}

const palette: Pallete = {
  main: "#fff",
  secondary: "#fff",
  third: "#fff",
  fourth: "#fff",
  fifth: "#fff",
};

type InitState = {
  palette: Pallete;
};

const initialState: InitState = {
  palette,
};

const paletteSlice = createSlice({
  name: "palette",
  initialState,
  reducers: {
    generatePallete(state): void {
      state.palette.main = "#" + Math.random().toString(16).slice(2, 8);
      state.palette.secondary = "#" + Math.random().toString(16).slice(2, 8);
      state.palette.third = "#" + Math.random().toString(16).slice(2, 8);
      state.palette.fourth = "#" + Math.random().toString(16).slice(2, 8);
      state.palette.fifth = "#" + Math.random().toString(16).slice(2, 8);
    },
  },
});

export const { generatePallete } = paletteSlice.actions;

export const selectPalette = (state: RootState) => state.palette.palette;

export default paletteSlice.reducer;
