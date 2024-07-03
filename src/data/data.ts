import { Drinks, Food, TopFood,  } from "../types/typeFood";
import { Comment } from "../types/typeComments";

export const topRatedFood: TopFood[] = [
    {
        id: '1',
        name: 'Tacos de Pastor',
        price: 10,
        img: '/images/tacos.png',
        rating: 4
    }, 
    {
        id: '2',
        name: 'Tacos de Bistec',
        price: 1,
        img: '/images/tacos.png',
        rating: 4
    },
    {
        id: '3',
        name: 'Tortas de Bistec',
        price: 2,
        img: '/images/tacos.png',
        rating: 5
    },
    {
        id: '4',
        name: 'Tlayudas',
        price: 3,
        img: '/images/tacos.png',
        rating: 3
    },
    {
        id: '5',
        name: 'Tacos de Lengua',
        price: 5,
        img: '/images/tacos.png',
        rating: 5
    },
    {
        id: '6',
        name: 'Quesadillas',
        price: 4,
        img: '/images/tacos.png',
        rating: 3
    },
]

export const AllFood: Food[] = [
    {
        id: '1',
        name: 'Tacos de Pastor',
        price: 10,
        img: '/images/tacos.png',
    },
    {
        id: '2',
        name: 'Tacos de Bistec',
        price: 1,
        img: '/images/tacos.png'
    },
    {
        id: '3',
        name: 'Tortas de Bistec',
        price: 2,
        img: '/images/tacos.png'
    },
    {
        id: '4',
        name: 'Tlayudas',
        price: 3,
        img: '/images/tacos.png'
    },
    {
        id: '5',
        name: 'Tacos de Lengua',
        price: 5,
        img: '/images/tacos.png'
    },
    {
        id: '6',
        name: 'Quesadillas',
        price: 4,
        img: '/images/tacos.png'
    },
]

export const AllDrinks: Drinks[] = [
    {
        id: '1',
        nombre: 'Coca Cola',
        precio: 10,
        img: '/images/tacos.png',
        tipo: 'Refrescos',
        createdAt:"2017-",
        categoriaId:"1"
    },
    {
        id: '2',
        nombre: 'Pepsi',
        precio: 1,
        img: '/images/tacos.png',
        tipo: 'Refrescos',
        createdAt:"2017-",
        categoriaId:"1"
    },
    {
        id: '3',
        nombre: 'Agua de Horchata',
        precio: 2,
        img: '/images/tacos.png',
        tipo: 'Aguas',
        createdAt:"2017-",
        categoriaId:"1"
    },
    {
        id: '4',
        nombre: 'Agua de Jamaica',
        precio: 3,
        img: '/images/tacos.png',
        tipo: 'Aguas',
        createdAt:"2017-",
        categoriaId:"1"
    },
    {
        id: '5',
        nombre: 'Cerveza',
        precio: 5,
        img: '/images/tacos.png',
        tipo: 'Cervezas',
        createdAt:"2017-",
        categoriaId:"1"
    },
    {
        id: '6',
        nombre: 'Tequila',
        precio: 4,
        img: '/images/tacos.png',
        tipo: 'Licores',
        createdAt:"2017-",
        categoriaId:"1"
    },
]

export const Comments: Comment[] = [
    {
        id: "1",
        comment: "Me gustan los tacos de pastor",
        email: "prueba1@gmail.com",
        name: "prueba",
        img: "/images/comment1.png"
    },
    {
        id: "2",
        comment: "Me gustan los tacos de pastor",
        email: "prueba2@gmail.com",
        name: "prueba",
        img: "/images/comment2.png"
    },
    {
        id: "3",
        comment: "Me gustan los tacos de pastor",
        email: "prueba3@gmail.com",
        name: "prueba",
        img: "/images/comment3.png"
    },
    {
        id: "4",
        comment: "Me gustan los tacos de pastor",
        email: "prueba4@gmail.com",
        name: "prueba",
        img: "/images/comment4.png"
    }
    
] 