export type Food = {
    id: string
    name: string
    price: number
    img: string
}

export type TopFood = Food & {
    rating: number
}

export type Drinks = Food & {
    type: string
}