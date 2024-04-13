import { createSlice } from "@reduxjs/toolkit";
import { mockReviewsSlides } from "./reviews.const";

export interface reviewsState {
  curr: number;
  slides: any[];
}

const initialState: reviewsState = {
  curr: 0,
  slides: mockReviewsSlides,
};

export const reviewsSlice = createSlice({
  name: "reviews",
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
  reducer: reviewsSliceReducer,
  actions: reviewsSliceActions
} = reviewsSlice