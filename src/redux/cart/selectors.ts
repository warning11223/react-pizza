import {RootState} from "../store";


export const selectCart = (state: RootState ) => state.cart;
export const selectCartItem = (id: number) => (state: RootState ) => state.cart.items.find(item => item.id === id);