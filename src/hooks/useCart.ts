import { useState, useEffect, useMemo } from "react"
import type { Phone, PhoneItem } from "../types"

export const useCart = () => {

    const initialCart = () : PhoneItem[]  => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [cart, setCart] = useState(initialCart)

    const MIN_ITEMS = 1
    const MAX_ITEMS = 5

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function removeFromCart(id: Phone['id']) {
        setCart(prevCart => prevCart.filter(phone => phone.id !== id))
    }

    function decreaseQuantity(id: Phone['id']) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function increaseQuantity(id: Phone['id']) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    // Derived State
    const isEmpty = useMemo(() => cart.length === 0, [cart])

    // Reduce (array method)
    const totalPrice = useMemo(() => cart.reduce((totalPrice, item) => totalPrice + (item.price * item.quantity), 0), [cart])

    return {
        cart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        totalPrice
    }
}