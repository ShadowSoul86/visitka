import useAxios from "@/hooks/useAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, Method, apiBase } from "../const";

import mockData from "@/data/mock.json";

export const getReviewsList = createAsyncThunk(
  "reviews/getReviewsList",
  async () => {
    // const url = `${BASE_URL}${apiBase}review/`;

    // const response = await useAxios(url, null, Method.Get);

    // return response?.data;

    return mockData?.reviews;
  }
);