"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.users = void 0;
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
//# sourceMappingURL=database.js.map