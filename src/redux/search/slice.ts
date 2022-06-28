import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SearchSliceState} from "./types";

const initialState: SearchSliceState = {
    searchInput: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        change: (state, action: PayloadAction<string>) => {
            state.searchInput = action.payload;
        },
    },
})



export const { change } = searchSlice.actions

export default searchSlice.reducer