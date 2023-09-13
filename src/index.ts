import { TUsers, TProducts } from "./types";
import express, {Request, Response, query} from 'express'
import cors from 'cors'
import { users, products,createUser,createProduct, getAllProducts, getAllUsers, searchProductByName } from "./database";



const app = express()
app.use(express.json)
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3000")
})

app.get("/ping", (req: Request, res:Response) => {
    res.send("pong!")
})

app.get("/users", (req: Request, res: Response) => {
    const resultUsers: TUsers[] = users 
    res.status(200).send(resultUsers)
})

// app.get("/products", (req:Request, res: Response) => {
//     const resultProducts: TProducts[] = products
//     res.status(200).send(resultProducts)
// })

app.get("/products", (req:Request , res:Response) => {
    const q:string = req.query.q as string;
    const resultProducts:TProducts[] = products


    if (!q) {
        return res.status(200).send(resultProducts)
    } else {
        const searchProductByName: TProducts[] = products.filter(products => products.name.toLowerCase().includes(q.toLowerCase()))
        return res.status(200).send(searchProductByName)
    }

})

app.post("/users", (req:Request, res: Response) => {
    const {id, name, email, password} = req.body
    
    const newUser = createUser(id,name,email,password)
    res.status(201).send(newUser)
})

app.post("/products", (req: Request, res: Response) => {
    const {id, name, price, description, imageUrl} = req.body
    
    const newProduct: TProducts = {
        id,
        name,
        price,
        description, 
        imageUrl
    }
    products.push(newProduct)
    res.status(201).send(`O produtos ${name} foi cadastrado com sucesso`)
})


console.log(createUser('003', 'João', 'joao@gmail.com', 'senha1'))
console.log(getAllUsers())
console.log(createProduct('prod003', 'Fones Bluetooth JBL', 350, 'Melhores fones para o seu dia-a-dia!', 'https://www.fastshop.com.br/web/p/d/JBLTOURONEPTO_PRD/fone-de-ouvido-jbl-headphone-conexao-bluetoothp2-preto---jbltouronem2blk--jbltouroneptoprd/?&utm_source=cpc_Yahoo&utm_medium=cpc&utm_campaign=MS_SSC_Alpha_2&msclkid=e263ca62fd3e10bc5ce8ae9be9e9efb4'))
console.log(getAllProducts())
console.log(searchProductByName('Fones Bluetooth JBL'))
console.table(users)
console.log(products)
console.log("TRanspilado com sucesso!")