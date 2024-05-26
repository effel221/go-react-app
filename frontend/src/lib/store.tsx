import {configureStore, Dispatch} from '@reduxjs/toolkit'
import {cardsSlice} from "../stores/cardsStore";
// ...

export const store = configureStore({
    reducer: {
        cards: cardsSlice.reducer,
    }
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Dispatch
