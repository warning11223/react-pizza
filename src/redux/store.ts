import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import cartSlice from "./cart/slice";
import filterSlice from "./filter/slice";
import pizzasSlice from "./pizza/slice";
import searchSlice from "./search/slice";


export const store = configureStore({
    reducer: {
        search: searchSlice,
        filter: filterSlice,
        cart: cartSlice,
        pizzas: pizzasSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;