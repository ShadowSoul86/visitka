import useAxios from "@/hooks/useAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, Method, apiBase } from "../const";

import mockData from "@/data/mock.json";

export const getPortfolioList = createAsyncThunk(
  "portfolio/getPortfolioList",
  async () => {
    const url = `${BASE_URL}${apiBase}portfolio/`;

    const response = await useAxios(url, null, Method.Get);

    return response?.data;

    // return mockData?.portfolio;
  }
);
