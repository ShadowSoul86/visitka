import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { tabs } from "./serve.const";

export interface serveTab {
  alias: string;
  title: string;
}

export interface serveState {
  tabs: serveTab[];
  activeTab: string;
}

const initialState: serveState = {
  tabs,
  activeTab: "all",
};

export const serveSlice = createSlice({
  name: "serve",
  initialState,
  reducers: {
    setActiveTab: (state, { payload }: PayloadAction<string>) => {
      state.activeTab = payload;
    },
  },
});

export const { setActiveTab } = serveSlice.actions;

export default serveSlice.reducer;
