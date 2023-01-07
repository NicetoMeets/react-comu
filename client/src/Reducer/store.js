import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./useSlice";

export default configureStore({
    reducer: {
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
