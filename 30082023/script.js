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
   console.log("Novo array completo: ")
   console.log(n)
   n.pop()
   console.log("Novo Log depois da atualização")
   console.log(n) 
   }
   function Cadastrar(){
      const produto = {
         iden: document.getElementById("prod_iden").value,
         marca: document.getElementById("prod_marca").value,
         preco: document.getElementById("prod_preco").value
      }
   
   const lista_item = document.createElement("li")
      const prod_iden = document.createElement("h3")
      const prod_preco = document.createElement("p")
      const prod_marca = document.createElement("h4")
      prod_iden.innerHTML = produto.iden
      prod_preco.innerHTML = produto.preco
      prod_marca.innerHTML = produto.marca
      lista_item.appendChild(prod_iden)
      lista_item.appendChild(prod_preco)
      lista_item.appendChild(prod_marca)

   document.getElementById("lista_prod").appendChild(lista_item)
   console.log(lista_item)
   }   
