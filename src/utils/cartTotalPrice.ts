import {CartItem} from "../redux/cart/types";


export const cartTotalPrice = (items: CartItem[]) => {
    return  items.reduce((accum, currentValue) => accum += currentValue.price * currentValue.count, 0);
}