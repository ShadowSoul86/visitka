import { useAppDispatch } from "@/hooks/rtk";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { serveSliceActions } from "./serve/serve.slice";
import { modalSliceActions } from "./modal/modal.slice";
import { headerSliceActions } from "./header/header.slice";
import { reviewsSliceActions } from "./reviews/reviews.slice";
import * as portfolioActions from "./portfolio/portfolio.async";
import * as serveActions from "./serve/serve.async";
import * as reviewActions from "./reviews/reviews.async";

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        {
          ...modalSliceActions,
          ...headerSliceActions,
          ...serveSliceActions,
          ...serveActions,
          ...reviewActions,
          ...reviewsSliceActions,
          ...portfolioActions,
        },
        dispatch
      ),
    [dispatch]
  );
};
