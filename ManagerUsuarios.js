

const fs = require ("fs")


class ProductManager{
    constructor(){
        this.path = "./productsjson.txt"
    }

    static id = 0

    async addProducts(title,description,price,thumbnail,code,stock,){
        
        ProductManager.id+1

        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id
        }

        await fs.promises.writeFile("./productsjson.txt","aqui van los productos")

    }

    async getProduct(){
        try {
            if(fs.existsSync(this.path)){
                const info = await fs.promises.readFile(this.path, "utf-8")
                return JSON.parse(info)
            } else {
                return []}        
        } catch (error) {
            return error
        }
    }



    async createProduct(prod){
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
}

const productos = new ProductManager