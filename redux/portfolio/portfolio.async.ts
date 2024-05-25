import useAxios from "@/hooks/useAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, Method } from "../const";

export const getPortfolioList = createAsyncThunk(
  "portfolio/getPortfolioList",
  async () => {
    const url = `${BASE_URL}/api/visitka/portfolio/`;

    const response = await useAxios(url, null, Method.Get);

    return response?.data;
  }
);
