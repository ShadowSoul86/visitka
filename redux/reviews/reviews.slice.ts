import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reviewCard } from "./reviews.types";
import { getReviewsList } from "./reviews.async";

export interface reviewsState {
  curr: number;
  data: reviewCard[];
  loadedStatus: boolean;
}

const initialState: reviewsState = {
  curr: 0,
  data: [],
  loadedStatus: false,
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    next: (state) => {
      state.curr = state.curr === state.data.length - 1 ? 0 : state.curr + 1;
    },
    prev: (state) => {
      state.curr = state.curr === 0 ? state.data.length - 1 : state.curr - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsList.pending.type, (state) => {
        state.loadedStatus = false;
      })
      .addCase(
        getReviewsList.fulfilled.type,
        (state, { payload }: PayloadAction<reviewCard[]>) => {
          state.data = payload;
          state.loadedStatus = true;
        }
      );
  },
});

export const { reducer: reviewsSliceReducer, actions: reviewsSliceActions } =
  reviewsSlice;
