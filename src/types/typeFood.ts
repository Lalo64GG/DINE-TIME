export type Food = {
    id: string
    nombre: string
    precio: number
    categoriaId?: string 
    img?: string,
    tipo?: string
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

export type Item = {
    item: Food | Drinks;
    quantity: number;
}

export type Order = {
    id: string;
    items: Item[];
    table: number;
}
