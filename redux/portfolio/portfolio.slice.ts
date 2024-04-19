import { createSlice } from "@reduxjs/toolkit";
import { portfolioCard } from "./portfolio.types";
import { getPortfolioList } from "./portfolio.async";

export interface portfolioState {
  data: portfolioCard[] | null;
}

const initialState: portfolioState = {
  data: null,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPortfolioList.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export const {
  reducer: portfolioSliceReducer,
  actions: portfolioSliceActions,
} = portfolioSlice;
