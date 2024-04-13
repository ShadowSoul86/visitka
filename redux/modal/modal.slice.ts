// store/modalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { modalDataType } from "./modal.types";

interface ModalState {
  currSlide: number;
  isOpen: boolean;
  data: modalDataType | null;
}

const initialState: ModalState = {
  currSlide: 0,
  isOpen: false,
  data: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload: p }: PayloadAction<any>) => {
      state.isOpen = true;
      state.data = p;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    nextModalSlide: (state) => {
      if (state.data?.slides) {
        state.currSlide =
          state.currSlide === state.data.slides.length - 1
            ? 0
            : state.currSlide + 1;
      }
    },
    prevModalSlide: (state) => {
      if (state.data?.slides) {
        state.currSlide =
          state.currSlide === 0
            ? state.data.slides.length - 1
            : state.currSlide - 1;
      }
    },
  },
});

export const { reducer: modalSliceReducer, actions: modalSliceActions } =
  modalSlice;
