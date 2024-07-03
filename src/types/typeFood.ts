export type Food = {
    id: string
    nombre: string
    precio: number
    categoriaId?: string 
    img?: string,
    createdAt: string
}

export type TopFood = Food & {
    rating: number
}

export type Drinks = Food & {
    tipo: string
}

export type Categoria = {
    productos: Food[] | Drinks[];
}
