<p>pobando handle bars</p> 

const socketClient = io();

const from = document.getElementById("form")
const inputName = document.getElementById("name")

const inputForm = document.getElementById("productform")
const inputTitle = document.getElementById("productname")
const inputPrice = document.getElementById("productprice")
const inputStock = document.getElementById("productstock")




from.onsubmit = (e) =>{
    e.preventDefault()
    const userName = inputName.value
    socketClient.emit("primerevento", userName)
};

socketClient.on(`segundoevento`, info =>{
    console.log(`informacion enviada ${info}`);
})

from.onsubmit = (e) =>{
    e.preventDefault()
    const product = {
        titlle: inputTitle.value,
        price: inputPrice.value,
        stock: inputStock.value
    }
    socketClient.emit("crearproduct", product)
};

socketClient.on(`productCreated`, (product)=>{})