import { configureStore } from "@reduxjs/toolkit";
import { friendSlice } from "./friend";
import { profileSlice } from "./profile";
import { chatSlice } from "./chat";

export const store = configureStore({
    reducer: {
        friend: friendSlice.reducer,
        profile: profileSlice.reducer,
        chat: chatSlice.reducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false,
        })
    )
})

export type RootState = ReturnType<typeof store.getState>