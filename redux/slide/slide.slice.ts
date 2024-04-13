import { createSlice } from "@reduxjs/toolkit";
import { mockReviewsSlides } from "./reviews.const";

export interface slideState {
  curr: number;
  slides: any[];
}

const initialState: slideState = {
  curr: 0,
  slides: mockReviewsSlides,
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    next: (state) => {
      state.curr = state.curr === state.slides.length - 1 ? 0 : state.curr + 1;
    },
    prev: (state) => {
      state.curr = state.curr === 0 ? state.slides.length - 1 : state.curr - 1;
    },
  },
});


export const {
  reducer: slideSliceReducer,
  actions: slideSliceActions
} = slideSlice