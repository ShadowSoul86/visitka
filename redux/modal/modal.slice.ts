// store/modalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { modalDataType } from "./modal.types";

interface ModalState {
  isOpen: boolean;
  data: modalDataType | null;
}

const initialState: ModalState = {
  isOpen: false,
  data: null
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, {payload: p}: PayloadAction<any>) => {
      state.isOpen = true;
      state.data = p;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  reducer: modalSliceReducer,
  actions: modalSliceActions
} = modalSlice
