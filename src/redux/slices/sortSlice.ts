import { createSlice } from "@reduxjs/toolkit";

interface sortState {
  like: boolean;
}

const initialState: sortState = {
  like: false,
};

export const sortSlice = createSlice({
  name: "sort",
  initialState: initialState,
  reducers: {
    setLike(state, action) {
      state.like = action.payload;
    },
  },
});

// Селекторы в редаксе - обычные функции чтоб не дублировать код, а импортировать функцию
export const selectSort = (state: { sortRedicer: sortState }) =>
  state.sortRedicer;

export const { setLike } = sortSlice.actions;

export default sortSlice.reducer;
