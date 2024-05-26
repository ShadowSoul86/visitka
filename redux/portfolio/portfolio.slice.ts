import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { portfolioCard } from "./portfolio.types";
import { getPortfolioList } from "./portfolio.async";

export interface portfolioState {
  data: portfolioCard[] | null;
  loadedStatus: boolean;
}

const initialState: portfolioState = {
  data: null,
  loadedStatus: false,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPortfolioList.pending.type, (state) => {
        state.loadedStatus = true;
      })
      .addCase(
        getPortfolioList.fulfilled.type,
        (state, { payload }: PayloadAction<portfolioCard[]>) => {
          state.data = payload;
          state.loadedStatus = false;
        }
      );
  },
});

export const {
  reducer: portfolioSliceReducer,
  actions: portfolioSliceActions,
} = portfolioSlice;
