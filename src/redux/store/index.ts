import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pathSlice from "../slices/pathSlice";
import UserSlice from "../slices/UserSlice";

const store = configureStore({
    reducer: {
        path: pathSlice.reducer,
        users: UserSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
