
class ProductManager {

    constructor(){
        this.products = []
    }

    agregarProducts(title,description,price,thumbnail,code,stock){
            const product ={
                title,
                description,
                price,
                thumbnail,
                code: this.products.length ? this.products[this.products.length-1].code+1 : 1,
                stock,
            }
    this.products.push(product)
    
    }

    addProduct(){
        const nuevoProduct = {...product,
            title:nuevoTitle,
            description:nuevoDescription,
            price:nuevoPrice,
            code:this.products.length ? this.products[this.products.length-1].code+1 : 1,
        }
        if(!title || !description || !price){
            return "Falta completar Campos"
        } else{
            this.products.push(nuevoProduct)
        }
        
    }

    getProducts(){
        for(let i = 0; i < this.products.length; i++) {
            return this.products[i]
        }
    }

    getProductById(codeProduct){
        const product = this.products.find(e=>e.code === codeProduct)
        if(!product){
            return console.log("Not Found")
        } else { 
            return product
        }
    }
}