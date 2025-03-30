export type Phone = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type PhoneItem = Phone & {
    quantity: number
}