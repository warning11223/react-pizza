export type PizzasItem = {
    category: string;
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    rating: number;
    sizes: number[];
    types: number[];
}

export enum Status {
    PENDING = 'pending',
    REJECTED = 'rejected',
    FULFILLED = 'fulfilled',
}

export type PizzaItem = {
    imageUrl: string,
    name: string,
    price: number,
    id: number
}

export interface PizzasSliceState {
    pizzas: PizzasItem[];
    status: Status;
    pizzaItem: PizzaItem;
    statusPizzaItem: Status;
}