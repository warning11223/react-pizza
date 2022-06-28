import {cartTotalPrice} from "./cartTotalPrice";


export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = cartTotalPrice(items);

    return {
        items,
        totalPrice,
    }
}