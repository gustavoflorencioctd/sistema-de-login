const fs = require('fs')
const prompt = require('readline-sync')

let lista_de_usuarios = []

lista_de_usuarios = JSON.parse(fs.readFileSync("bd.json"))

let loop = true
let loged = false

function login() {
    console.log("LOGIN")
    console.log("Insira seu usuario e senha")

    let usuario = prompt.question("Usuario:")
    let senha = prompt.question("Senha:")

    for (let index = 0; index < lista_de_usuarios.length; index++) {

        if (usuario === lista_de_usuarios[index].login && senha == lista_de_usuarios[index].senha) {
            console.clear()
            loged = true
            console.log(`BEM VINDO`)
        }
        else {
            console.clear()
            console.log(`Login ou senha invalidos!`)
        }

    }
}

while (loop) {
    if (!loged) {
        login()
    }
}