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

export const cartReducer = (
    state: CartState,
    action: CartActions
) => {
    // Defining actions
    if (action.type === 'add-to-cart') {
        return {
            ...state
        }
    }

    if (action.type === 'remove-from-cart') {
        return {
            ...state
        }
    }

    if (action.type === 'decrease-from-cart') {
        return {
            ...state
        }
    }

    if (action.type === 'increase-from-cart') {
        return {
            ...state
        }
    }

    if (action.type === 'clearCart') {
        return {
            ...state
        }
    }

    return state
}