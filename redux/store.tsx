import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./header/header.slice";
import reviewsSlice from "./reviews/reviews.slice";
import modalSlice from "./modal/modal.slice";
import serveSlice from "./serve/serve.slice";

export const store = configureStore({
  reducer: {
    header: headerSlice,
    reviews: reviewsSlice,
    modal: modalSlice,
    serve: serveSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
