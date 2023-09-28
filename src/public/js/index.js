<p>pobando handle bars</p> 

const socketClient = io();

const from = document.getElementById("form")
const inputName = document.getElementById("name")

from.onsubmit = (e) =>{
    e.preventDefault()
    const userName = inputName.value
    socketClient.emit("primerevento", userName)

};

socketClient.on(`segundoevento`, info =>{
    console.log(`informacion enviada ${info}`);
})