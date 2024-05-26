import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { tabs } from "./serve.const";
import { serveType } from "./serve.types";
import { getServiceList } from "./serve.async";

export interface serveState {
  tabs: string[];
  activeTab: string;
  data: serveType[];
  loadedStatus: boolean;
}

const initialState: serveState = {
  tabs,
  activeTab: "Все",
  data: [],
  loadedStatus: false,
};

export const serveSlice = createSlice({
  name: "serve",
  initialState,
  reducers: {
    setActiveTab: (state, { payload }: PayloadAction<string>) => {
      state.activeTab = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServiceList.pending.type, (state) => {
        state.loadedStatus = false;
      })
      .addCase(
        getServiceList.fulfilled.type,
        (state, { payload }: PayloadAction<serveType[]>) => {
          state.data = payload;
          state.loadedStatus = true;
        }
      );
  },
});

export const { reducer: serveSliceReducer, actions: serveSliceActions } =
  serveSlice;
