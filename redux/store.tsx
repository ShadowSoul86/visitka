import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal/modal.slice";
import headerSlice from "./header/header.slice";
import { reviewsSliceReducer } from "./reviews/reviews.slice";
import { serveSliceReducer } from "./serve/serve.slice";

export const store = configureStore({
  reducer: {
    header: headerSlice,
    modal: modalSlice,
    reviews: reviewsSliceReducer,
    serve: serveSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
