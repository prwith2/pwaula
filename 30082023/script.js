function login(){
    var email = document.getElementById('uname').value
    var senha = document.getElementById('upassword').value
    const emailcorreto = "soumaiseu@gmail.com"
    const senhacorreta = "soumaiseu"
    if(email == emailcorreto && senha == senhacorreta){
        alert("Login concluido com sucesso!")
    }
    else{
        alert("Login não concluido com sucesso!")
    }
 }
 
 function somar(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 + n2)
 }

 function subtrair(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 - n2)
 }

 function multiplicar(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 * n2)
 }

 function dividir(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 / n2)
 }

 function potencia(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 ** n2)
 }

 function raiz(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    alert(Math.sqrt(n1))
 }
 
 function nome(){
    const nome = document.getElementById("nome").value
    alert(nome)
    document.getElementById("exibirnome").innerHTML = nome
 }


 function array_exemplo(){
   let n = [3, 4, 5, 6, 2, 1]
   console.log("Esse console log mostra o array completo")
   console.log(n)
   console.log("Esse console log mostra o valor no índice 0 do array")
   console.log(n[0])
   console.log("Esse console log mostra o valor no índice 6 do array: " + n[6] + ".legal!")
   n[6] = "7"
   console.log("Esse console log mostra o valor no índice 6 do array" + n[6])
   console.log("Esse console log mostra o array completo")
   console.log(n)
   n.push(50)
   n.push(32)
   n.push(15)
   console.log("Esse console log mostra o array completo")
   console.log(n)
   n.pop()
   console.log("Esse console log mostra o array completo")
   console.log(n)
   n.pop()
   console.log("Esse console log mostra o array completo")
   console.log(n)
   n.pop()
   console.log("Esse console log mostra o array completo")
   console.log(n)
   n.pop()
   console.log("Esse console log mostra o array completo")
   console.log(n)
   n.pop()
   console.log("Esse console log mostra o array completo")
}

function array(){
   let n = [3, 4, 5, 6, 2, 1,]
   console.log("Esse console log mostra o array completo: " + n)
   console.log(n)
   console.log("Esse console log mostra o indice zero: " + n[0])
   n[6]=7
   console.log("Esse e o indice 6: " + n[6])
   n.push(68)
   n.push(70)
   // push = empurrar
   console.log("Novo array completo: ")
   console.log(n)
   n.pop()
   console.log("Novo Log depois da atualização")
   console.log(n)
   //tira o ultimo  elemento do array
   
   
   }
   function produto(){
       let product = document.getElementById("frmProduto").value
       let li = document.createElement("li") 
       li.innerHTML=product
       document.getElementById("li1").appendChild(li)
       console.log(product)
   }
   function valor(){
       let Valor = document.getElementById("frmValor").value
       let li = document.createElement("li") 
       li.innerHTML=Valor
       document.getElementById("li2").appendChild(li)
       console.log(Valor)
   }
   function marca(){
       let marca = document.getElementById("frmMarca").value
       let li = document.createElement("li") 
       li.innerHTML=marca
       document.getElementById("li3").appendChild(li)
       console.log(marca)
   }
   document.addEventListener("DOMContentLoaded", function() {
       document.getElementById("botao").addEventListener("click", function(){
           produto();
           valor();
           marca();
       });
   });
