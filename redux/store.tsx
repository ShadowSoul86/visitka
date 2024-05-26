import { configureStore } from "@reduxjs/toolkit";
import { serveSliceReducer } from "./serve/serve.slice";
import { modalSliceReducer } from "./modal/modal.slice";
import { headerSliceReducer } from "./header/header.slice";
import { portfolioSliceReducer } from "./portfolio/portfolio.slice";
import { reviewsSliceReducer } from "./reviews/reviews.slice";

export const store = configureStore({
  reducer: {
    header: headerSliceReducer,
    portfolio: portfolioSliceReducer,
    modal: modalSliceReducer,
    reviews: reviewsSliceReducer,
    serve: serveSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
