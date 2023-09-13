"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProductByName = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "001",
        name: 'Fulano',
        email: 'fulano@email.com',
        password: 'fulano123',
        createdAt: new Date().toISOString(),
    },
    {
        id: "002",
        name: 'Beltrano',
        email: 'beltrano@email.com',
        password: 'beltrano123',
        createdAt: new Date().toISOString(),
    }
];
exports.products = [
    {
        id: 'prod001',
        name: 'Mouse Gamer',
        price: 250,
        description: 'Melhor mouse do mercado!',
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    }, {
        id: 'prod002',
        name: 'Monitor',
        price: 900,
        description: 'Monitor LED Full HD 24 polegadas',
        imageUrl: "https://picsum.photos/seed/Monitor/400"
    }
];
// EXERCÍCIO 1
function createUser(id, name, email, password) {
    const createdAt = new Date().toISOString();
    const newUser = { id, name, password, email, createdAt };
    exports.users.push(newUser);
    return "Cadastro realizado com sucesso!";
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
const listaDeUsuarios = getAllUsers();
console.log(listaDeUsuarios);
// EXERCÍCIO 2
function createProduct(id, name, price, description, imageUrl) {
    const newProduct = { id, name, price, description, imageUrl };
    exports.products.push(newProduct);
    return "Produto criado com sucesso";
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
// EXERCÍCIO 3
function searchProductByName(name) {
    name = name.toLowerCase();
    const chooseProducts = exports.products.filter((product) => product.name.toLowerCase().includes(name));
    return chooseProducts;
}
exports.searchProductByName = searchProductByName;
//# sourceMappingURL=database.js.map