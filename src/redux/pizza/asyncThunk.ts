import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {PizzasItem} from "./types";

export const fetchPizzas = createAsyncThunk<PizzasItem[], Record<string, string>>('pizzas/fetchPizzas', async ({categories, sortBy, currentPage, order, search}) => {
        let { data } = await axios.get<PizzasItem[]>(`https://628a66eae5e5a9ad322438ca.mockapi.io/items/${categories}sortBy=${sortBy}&page=${currentPage}&limit=8&order=${order}${search}`);

        return data;
    }
)

export const fetchPizza = createAsyncThunk<PizzasItem, Record<string, string>>(
    'pizzas/fetchPizza',
    async ({id}) => {
        const { data } = await axios.get<PizzasItem>(`https://628a66eae5e5a9ad322438ca.mockapi.io/items/${id}`);

        return data;
    }
)