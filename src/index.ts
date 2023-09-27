import { TUsers, TProducts } from "./types";
import express, {Request, Response, query} from 'express'
import cors from 'cors'
import { users, products ,createUser,createProduct, getAllProducts, getAllUsers, searchProductByName } from "./database";



const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res:Response) => {
    res.send("pong!")
})

app.get("/users", (req: Request, res: Response) => {
    const resultUsers: TUsers[] | undefined = users 
        try{
            if(!users){
                res.statusCode = 404
                throw new Error ("Verifique se o caminho está correto")
            }
            res.status(200).send(resultUsers)
        } catch(error){

            if(error instanceof Error){
                res.send(error.message)
            }

        }
})

// app.get("/products", (req:Request, res: Response) => {
//     const resultProducts: TProducts[] = products
//     res.status(200).send(resultProducts)
// })

app.get("/products", (req:Request , res:Response) => {
    const q:string = req.query.q as string;
    const resultProducts:TProducts[] = products


   try{
        if(!q && q.length < 1)  {
          res.statusCode = 404
          throw new Error('Verifique se o query foi recebido e possui mais de 2 caracteres')
        } 

        if (!q) {
            return res.status(200).send(resultProducts)
        } else {
            const searchProductByName: TProducts[] = products.filter(products => products.name.toLowerCase().includes(q.toLowerCase()))
            return res.status(200).send(searchProductByName)
        }
        
   }catch(error){
    if(error instanceof Error){
        res.send(error.message)
    }
   }

})

app.post("/users", (req:Request, res: Response) => {
    const {id, name, email, password} = req.body
   try{
        const idExist = users.find((user) => user.id === id)
        const emailExist = users.find((user) => user.email === email)
        if(idExist){
            res.statusCode = 404
            throw new Error("Este ID já existe, por favor insira um novo ID")
        }

        if(emailExist || !email.includes("@")){
            res.statusCode = 404
            throw new Error("Este Email já existe, por favor, insira um novo em formato de email '@'")
        }

        const newUser = createUser(id,name,email,password)
        res.status(201).send(newUser)
   }catch(error){
        if(error instanceof Error){
            res.send(error.message)
        }
   }
})

app.post("/products", (req: Request, res: Response) => {
    const {id, name, price, description, imageUrl} = req.body
    
   try{
    const productExist = products.find((product)=> product.id === id)
    if(productExist){
        res.statusCode = 404
        throw new Error("Este ID de produto já existe, por favor, insira um novo.")
    }
    const newProduct: TProducts = {
        id,
        name,
        price,
        description, 
        imageUrl
    }
    products.push(newProduct)
    res.status(201).send(`O produtos ${name} foi cadastrado com sucesso`)
   }catch(error){
    if(error instanceof Error){
        res.send(error.message)
    }
   }
})

app.delete("/user/:id", (req: Request, res: Response) => {
    const id = req.params.id

        try{
            const idUserExist = users.find((user) => user.id === id)

            if(!idUserExist ){
                res.statusCode = 404
                throw new Error("ID de usuário não existe, por favor insira o dado correto.")
            }
            const indexToDelete = users.findIndex((user)=>  user.id === id)
    
            if (indexToDelete >= 0) {
                users.splice(indexToDelete, 1)
            }

            res.status(200).send("Usuário deletado com sucesso!")
        }catch(error){
            if(error instanceof Error){
                res.send(error.message)
            }
        }
})

app.delete("/products/:id", (req: Request, res: Response) => {
    const id = req.params.id

    try{
        const idProdExist = products.find((product) => product.id === id)
        if(!idProdExist){
            res.statusCode = 404
            throw new Error("ID não existe, por favor, insira um ID válido")
        }
        const indexToDelete = products.findIndex((product)=>  product.id === id)
    
        if (indexToDelete >= 0) {
            products.splice(indexToDelete, 1)
        }

        res.status(200).send("Produto deletado com sucesso!")
    }catch(error){
        if(error instanceof Error){
            res.send(error.message)
        }
    }
})

app.put("/products/:id", (req:Request, res: Response) => {
    const idParams = req.params.id
    // const {name, price, description, imageUrl} : TProducts = req.body

    try{
        const productExist = products.find((product) => product.id === idParams)
        if(!productExist){
            res.statusCode = 404
            throw new Error("Produto não existe, digite um válido.")
        }

        const newId = req.body.id as string | undefined
        const newName = req.body.name as string | undefined
        const newPrice = req.body.price as number | undefined
        const newDescription = req.body.description as string | undefined
        const newImageUrl = req.body.imageUrl as string | undefined

        const productEx = products.find((product)=> product.id === idParams)

        if(productEx){
            productEx.id = newId || productEx.id
            productEx.price = newPrice || productEx.price
            productEx.description = newDescription || productExist.description
            productEx.imageUrl = newImageUrl || productEx.imageUrl
            productEx.name = newName || productEx.name
        }


        res.status(200).send("Produto alterado com sucesso!")
    }catch(error){
        if(error instanceof Error){
            res.send(error.message)
        }
    }
})

