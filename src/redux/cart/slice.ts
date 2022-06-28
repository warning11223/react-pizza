import {getCartFromLS} from "../../utils/getCartFromLS";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {cartTotalPrice} from "../../utils/cartTotalPrice";
import {CartItem, CartSliceState} from "./types";

const { items, totalPrice } = getCartFromLS();

const initialState: CartSliceState = {
    items,
    totalPrice,
}

const calcTotalPrice = (state: CartSliceState) => {
    state.totalPrice = state.items.reduce((accum, currentValue) => {
        return accum += currentValue.price * currentValue.count;
    }, 0)
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find(item => item.id === action.payload.id);

            if(findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = cartTotalPrice(state.items);
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);

            calcTotalPrice(state);
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        minusItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find(item => item.id === action.payload.id);

            if(findItem) {
                findItem.count--;
            }

            calcTotalPrice(state);
        }
    },
})



export const { addItem, deleteItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;