import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface headerState {
  isOpended: boolean;
}

const initialState: headerState = {
  isOpended: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setIsOpened: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpended = payload;
    },
  },
});

export const {
  reducer: headerSliceReducer,
  actions: headerSliceActions
} = headerSlice
