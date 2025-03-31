import { Phone } from '../types';

export type CartActions = 
    { type: 'add-to-cart'; payload: { item: Phone } } |
    { type: 'remove-from-cart'; payload: { id: Phone['id'] } } |
    { type: 'decrease-from-cart'; payload: { id: Phone['id'] } } |
    { type: 'increase-from-cart'; payload: { id: Phone['id'] } } |
    { type: 'clearCart' }