import useAxios from "@/hooks/useAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, Method, apiBase } from "../const";

import mockData from "@/data/mock.json";

export const getServiceList = createAsyncThunk(
  "serve/getServiceList",
  async () => {
    const url = `${BASE_URL}${apiBase}service/`;


    const response = await useAxios(url, null, Method.Get);

    return response?.data;

    // return mockData?.service;
  }
);
