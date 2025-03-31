import { db } from '../data/db';
import { Phone, PhoneItem } from '../types';

export type CartActions = 
    { type: 'add-to-cart'; payload: { item: Phone } } |
    { type: 'remove-from-cart'; payload: { id: Phone['id'] } } |
    { type: 'decrease-from-cart'; payload: { id: Phone['id'] } } |
    { type: 'increase-from-cart'; payload: { id: Phone['id'] } } |
    { type: 'clearCart' }

export type CartState = {
    data: Phone[]
    cart: PhoneItem[]
}

// This is defined when using the useReducer
export const initialState : CartState = {
    data: db,
    cart: []
}