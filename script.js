function ola_mundo(){

    alert ("olá mundo")


} 
function mostraNome(){ 
    let nome = String(prompt("escreva seu nome: "))
    console.log(nome)
}
function concatenaPalavras(){
    let nome1 = String(prompt("escreva o nome1"))
    let nome2 = String(prompt("nome2"))
    console.log(nome1 + nome2)
 }
 function somaNumeros(){ 
    let n1 = parseInt(prompt("digite n1"))
    let n2 = parseInt(prompt("digite n2"))
    console.log(n1+n2)    
 }
 var n1 = parseInt(prompt("digite n1"))
 var n2 = parseInt(prompt("digite n2"))
 function subtraiNumeros(n1, n2){ 
    console.log(n1-n2)    
 }
 function criaObjeto(){
    let nome = String(prompt("escreva seu nome: "))
    let idade = parseInt(prompt("digite sua idade: "))
    let timefavorito = String(prompt("escreva seu time favorito: "))
    const usuario= [nome, idade, timefavorito]
    console.log("usuario",usuario)
  }
function calculadora(){
    let n1 = parseInt(prompt("digite n1"))
    let n2 = parseInt(prompt("digite n2"))
    let operação = String(prompt("qual a operação"))
    if(operação === "somar"){
        console.log(n1+n2)
    }
    if(operação === "subtrair"){
        console.log(n1-n2)
    }
    if(operação === "multiplicar"){
        console.log(n1*n2)
    }
    if(operação === "dividir"){
        console.log(n1/n2)
    }
} 
function mudaConstante(){
    const nome = String(prompt("escreva seu nome: "))
    console.log(nome)
}
function manipulaarrays(){
    let cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"]
    console.log(cores)
    cores.push("laranja")
    console.log(cores)
    cores.pop()
    console.log(cores)
    cores.sort()
    console.log(cores)
    cores.splice(1,1)
    console.log(cores)
    let length = cores.length;
    console.log(length)
    cores.unshift("fucsia")
    console.log(cores)    
    let cor = cores.shift()
    console.log(cores)
}
