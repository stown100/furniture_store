import { createSlice } from "@reduxjs/toolkit";

interface sumState {
  sum: number;
}

const initialState: sumState = {
  sum: 0,
};

export const sumSlice = createSlice({
  name: "sum",
  initialState: initialState,
  reducers: {
    setSum(state, action) {
      state.sum = action.payload;
    },
  },
});

// Селекторы в редаксе - обычные функции чтоб не дублировать код, а импортировать функцию
export const selectSum = (state: { sumReducer: sumState }) => state.sumReducer;

export const { setSum } = sumSlice.actions;

export default sumSlice.reducer;
