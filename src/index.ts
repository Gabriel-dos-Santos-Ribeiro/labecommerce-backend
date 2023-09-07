import { users, products,createUser,createProduct, getAllProducts, getAllUsers, searchProductByName } from "./database";

console.log(createUser('003', 'João', 'joao@gmail.com', 'senha1'))
console.log(getAllUsers())
console.log(createProduct('prod003', 'Fones Bluetooth JBL', 350, 'Melhores fones para o seu dia-a-dia!', 'https://www.fastshop.com.br/web/p/d/JBLTOURONEPTO_PRD/fone-de-ouvido-jbl-headphone-conexao-bluetoothp2-preto---jbltouronem2blk--jbltouroneptoprd/?&utm_source=cpc_Yahoo&utm_medium=cpc&utm_campaign=MS_SSC_Alpha_2&msclkid=e263ca62fd3e10bc5ce8ae9be9e9efb4'))
console.log(getAllProducts())
console.log(searchProductByName('Fones Bluetooth JBL'))
console.table(users)
console.log(products)
console.log("TRanspilado com sucesso!")