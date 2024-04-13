import { useAppDispatch } from "@/hooks/rtk"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { reviewsSliceActions } from "./reviews/reviews.slice"
import { serveSliceActions } from "./serve/serve.slice"

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators({
    ...reviewsSliceActions,
    ...serveSliceActions,
  }, dispatch), [dispatch])
}