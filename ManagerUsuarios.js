

const fs = require ("fs")


class ProductManager{
    constructor(){
        this.path = "./productsjson.txt"

        if(!fs.existsSync(this.path)){
            fs.promises.writeFile(this.path,JSON.stringify([]))
        }
    }

    static id = 0


    //comprobar validacion


    async addProducts(title,description,price,thumbnail,code,stock,){
        
        const id = ProductManager.id+1

        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id,
        }

        // esto debe eestar en otra funcion.
        const products = await this.getProduct()
        products.push(newProduct)

        await fs.promises.writeFile(this.path, JSON.stringify(products))


    }


    async getProduct(){
        try {
                const info = await fs.promises.readFile(this.path, "utf-8")
                const cleanProducts = JSON.parse(info)
                return cleanProducts
        } catch (error) {
            return error
        }
    }




    async createProduct(){
        try {
            const productos = await this.getProduct()
            productos.push(prod)
            await fs.promises.writeFile(this.path,JSON.stringify(productos))

        } catch (error) {
            return error
        }
    
    
    }


    async getProductById(idProduct){
        try {
            const products = await this.getProduct()
            const product = products.find(p=>p.id === idProduct)
            if(product){
                return product
            } else {
                return "no existe producto"
            }
            
        } catch (error) {
            return error
        }

    }

    async deleteProduct(idProduct){
        try {
            const products = await this.getProduct()
            const newArrayProducts = products.filter(p=>p.id!==idProduct)
            await fs.promises.writeFile(this.path,JSON.stringify(newArrayProducts))
        } catch (error) {
            return error
        }
    }

    async updateProduct(id){
        await this.deleteProduct(id)
        const productUpdate = await this.addProducts(title,description,price,thumbnail,code,stock,id)
        products.push(productUpdate)
    }
}




/*
const ManagerProductos = new ProductManager()
async function subirProductos(){
await ManagerProductos.addProducts("telefono", "lindo", 500, 1, 2)
await ManagerProductos.addProducts("televisor", "grande", 300, 1, 2)
}

subirProductos()*/