import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PizzasItem, PizzasSliceState, Status} from "./types";
import {fetchPizza, fetchPizzas} from "./asyncThunk";

const initialState: PizzasSliceState = {
    pizzas: [],
    status: Status.PENDING, //pending | rejected | fulfilled
    pizzaItem: {
        imageUrl: '',
        price: 0,
        name: '',
        id: 0,
    },
    statusPizzaItem: Status.PENDING,
}


export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.pizzas = action.payload;
            state.status = Status.FULFILLED;
        });
        builder.addCase(fetchPizzas.pending, (state) => {
            state.pizzas = [];
            state.status = Status.PENDING;
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.pizzas = [];
            state.status = Status.REJECTED;
        });
        builder.addCase(fetchPizza.fulfilled, (state, action: PayloadAction<PizzasItem>) => {
            state.pizzaItem.id = action.payload.id;
            state.pizzaItem.imageUrl = action.payload.imageUrl;
            state.pizzaItem.price = action.payload.price;
            state.pizzaItem.name = action.payload.name;
            state.statusPizzaItem = Status.FULFILLED;
        });
        builder.addCase(fetchPizza.pending, (state) => {
            state.pizzaItem = {
                imageUrl: '',
                price: 0,
                name: '',
                id: 0,
            };
            state.statusPizzaItem = Status.PENDING;
        });
        builder.addCase(fetchPizza.rejected, (state) => {
            state.pizzaItem = {
                imageUrl: '',
                price: 0,
                name: '',
                id: 0,
            };
            state.statusPizzaItem = Status.REJECTED;
        });
    }
    // extraReducers: {
    //     [fetchPizzas.fulfilled]: (state, action: PayloadAction<PizzasItem>) => {
    //         state.pizzas = action.payload;
    //         state.status = 'fulfilled';
    //     },
    //     [fetchPizzas.pending]: (state) => {
    //         state.pizzas = [];
    //         state.status = 'pending';
    //     },
    //     [fetchPizzas.rejected]: (state) => {
    //         state.pizzas = [];
    //         state.status = 'rejected';
    //     },
    // }
})


export default pizzasSlice.reducer;