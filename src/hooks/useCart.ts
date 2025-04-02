import { useState, useEffect } from "react"
import type { PhoneItem } from "../types"

export const useCart = () => {

    const initialCart = () : PhoneItem[]  => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [cart, setCart] = useState(initialCart)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return {
        cart
    }
}