import { TUsers, TProducts } from "./types";

export const users:TUsers[] = [
    {
        id:"001",
        name:'Fulano',
        email: 'fulano@email.com',
        password:'fulano123',
        createdAt: new Date().toISOString(),
    },
    {
        id:"002",
        name:'Beltrano',
        email: 'beltrano@email.com',
        password:'beltrano123',
        createdAt: new Date().toISOString(),
    }
]

export const products:TProducts[] = [
    {
        id:'prod001',
        name:'Mouse Gamer',
        price: 250,
        description:'Melhor mouse do mercado!',
        imageUrl:"https://picsum.photos/seed/Mouse%20gamer/400"
    },{
        id:'prod002',
        name:'Monitor',
        price: 900,
        description:'Monitor LED Full HD 24 polegadas',
        imageUrl:"https://picsum.photos/seed/Monitor/400"
    }
]

// EXERCÍCIO 1

export function createUser(id:string,name:string, email:string, password:string):string{

        const createdAt:string = new Date().toISOString()
        const newUser: TUsers = {id, name, password,email, createdAt}
        users.push(newUser);
        return"Cadastro realizado com sucesso!"
}

export function getAllUsers():TUsers[]{
    return users
}

const listaDeUsuarios:TUsers[] = getAllUsers()
console.log(listaDeUsuarios)

// EXERCÍCIO 2
export function createProduct(id:string, name:string, price:number, description:string, imageUrl:string):string {
    const newProduct: TProducts = {id, name,price, description, imageUrl}
    products.push(newProduct);
    return "Produto criado com sucesso"
}

export function getAllProducts():TProducts[] {
    return products
}

// EXERCÍCIO 3
export function searchProductByName(name:string):TProducts[] {
    name = name.toLowerCase()
    const chooseProducts = products.filter((product) => product.name.toLowerCase().includes(name))
    return chooseProducts
}