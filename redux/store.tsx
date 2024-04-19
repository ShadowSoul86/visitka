import { configureStore } from "@reduxjs/toolkit";
import { serveSliceReducer } from "./serve/serve.slice";
import { modalSliceReducer } from "./modal/modal.slice";
import { headerSliceReducer } from "./header/header.slice";
import { slideSliceReducer } from "./slide/slide.slice";
import { portfolioSliceReducer } from "./portfolio/portfolio.slice";

export const store = configureStore({
  reducer: {
    header: headerSliceReducer,
    portfolio: portfolioSliceReducer,
    modal: modalSliceReducer,
    slide: slideSliceReducer,
    serve: serveSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
