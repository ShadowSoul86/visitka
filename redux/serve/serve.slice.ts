import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { mockData, tabs } from "./serve.const";

export interface serveTab {
  alias: string;
  title: string;
}

export interface serveState {
  tabs: serveTab[];
  activeTab: string;
  data: any[]
}

const initialState: serveState = {
  tabs,
  activeTab: "all",
  data: mockData,
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

export const {
  reducer: serveSliceReducer,
  actions: serveSliceActions
} = serveSlice