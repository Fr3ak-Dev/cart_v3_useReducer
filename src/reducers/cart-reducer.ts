import { db } from '../data/db';
import { Phone, PhoneItem } from '../types';

export type CartActions =
    { type: 'add-to-cart'; payload: { item: Phone } } |
    { type: 'remove-from-cart'; payload: { id: Phone['id'] } } |
    { type: 'decrease-from-cart'; payload: { id: Phone['id'] } } |
    { type: 'increase-from-cart'; payload: { id: Phone['id'] } } |
    { type: 'clearCart' };

export type CartState = {
    data: Phone[]
    cart: PhoneItem[]
}

const initialCart = () : PhoneItem[]  => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

// This is defined when using the useReducer
export const initialState: CartState = {
    data: db,
    cart: initialCart()
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5

export const cartReducer = (
    state: CartState,
    action: CartActions
) => {
    // Defining actions
    if (action.type === 'add-to-cart') {
        const itemExists = state.cart.find(phoneTemp => phoneTemp.id === action.payload.item.id)
        let updatedCart: PhoneItem[] = []
        if (itemExists) { // exist in cart
            updatedCart = state.cart.map(item => {
                if (item.id === action.payload.item.id) {
                    if (item.quantity >= MAX_ITEMS) return item // no add more than MAX_ITEMS
                    return {
                        ...item,
                        quantity: item.quantity++
                    }
                }
                return item
            })
        } else {
            const newItem = { ...action.payload.item, quantity: 1 }
            updatedCart = [...state.cart, newItem]
        }

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'remove-from-cart') {
        const cart = state.cart.filter(item => item.id !== action.payload.id);
        return {
            ...state,
            cart
        }
    }

    if (action.type === 'decrease-from-cart') {
        const cart = state.cart.map(item => {
            if (item.id === action.payload.id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        return {
            ...state,
            cart
        }
    }

    if (action.type === 'increase-from-cart') {
        const cart = state.cart.map(item => {
            if (item.id === action.payload.id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        
        return {
            ...state,
            cart
        }
    }

    if (action.type === 'clearCart') {
        return {
            ...state,
            cart: []
        }
    }

    return state
}