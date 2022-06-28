export type CartItem = {
    count: number;
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    size: number;
    type: string;
}

export interface CartSliceState {
    items: CartItem[];
    totalPrice: number;
}