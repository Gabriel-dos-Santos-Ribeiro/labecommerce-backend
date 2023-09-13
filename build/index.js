"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
console.log((0, database_1.createUser)('003', 'João', 'joao@gmail.com', 'senha1'));
console.log((0, database_1.getAllUsers)());
console.log((0, database_1.createProduct)('prod003', 'Fones Bluetooth JBL', 350, 'Melhores fones para o seu dia-a-dia!', 'https://www.fastshop.com.br/web/p/d/JBLTOURONEPTO_PRD/fone-de-ouvido-jbl-headphone-conexao-bluetoothp2-preto---jbltouronem2blk--jbltouroneptoprd/?&utm_source=cpc_Yahoo&utm_medium=cpc&utm_campaign=MS_SSC_Alpha_2&msclkid=e263ca62fd3e10bc5ce8ae9be9e9efb4'));
console.log((0, database_1.getAllProducts)());
console.log((0, database_1.searchProductByName)('Fones Bluetooth JBL'));
console.table(database_1.users);
console.log(database_1.products);
console.log("TRanspilado com sucesso!");
//# sourceMappingURL=index.js.map