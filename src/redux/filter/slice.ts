import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterSliceState} from "./types";

const initialState: FilterSliceState = {
    categoriesIndex: 0,
    sortItem: 0,
    currentPage: 1,
}

export const filterSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategoriesIndex: (state, action: PayloadAction<number>) => {
            state.categoriesIndex = action.payload;
        },
        setSortItem: (state, action: PayloadAction<number>) => {
            state.sortItem = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setFilters: (state, action) => {
            state.sortItem = action.payload.sortItem;
            state.categoriesIndex = Number(action.payload.categoriesIndex);
            state.currentPage = Number(action.payload.currentPage);
        }
    },
})

export const { setCategoriesIndex, setSortItem, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;