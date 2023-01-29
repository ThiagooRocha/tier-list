import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, bgColor: "#ea580c" },
  { id: 2, bgColor: "#f97316" },
  { id: 3, bgColor: "#fb923c" },
];

export const TierListLine = createSlice({
  name: "TierListLine",
  initialState,
  reducers: {
    New_Line: (state) => {
      const newLine = {
        id: Math.random(),
      };
      return [...state, newLine];
    },
    Delete_Line: (state, action) => {
      return state.filter(line => line.id !== action.payload.id)
    },
  },
});

export const { New_Line, Delete_Line } = TierListLine.actions;
export const TierListLineReducer = TierListLine.reducer;
