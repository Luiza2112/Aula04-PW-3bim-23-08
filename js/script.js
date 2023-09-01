//é possível testar o JS pelo 'inspecionar' no Chrome e depois em 'console'
function login(){
    let email = document.getElementById("frmemail").value
    let password = document.getElementById("frmpassword").value
    console.log(email)
    console.log(password)
    if(email == "login" && password == "123456" ){
        alert("Login realizado com sucesso!")
    }
    else{
        alert("Não foi possível realizar o login")
    }
}



function somar(){
    let n1 = parseInt(prompt("Digite o primeiro número"))
    let n2 = parseInt(prompt("Digite o segundo número"))
    // Essa função devolve o tipo de dado da variável escolhida. 
    console.log(typeof(n1)) 
    console.log(typeof(n2)) 
    let resultado = n1 + n2
    console.log(resultado)
}

function subtrair(){
    let n1 = parseInt(prompt("Digite o primeiro número"))
    let n2 = parseInt(prompt("Digite o segundo número"))
    // Essa função devolve o tipo de dado da variável escolhida. 
    console.log(typeof(n1)) 
    console.log(typeof(n2)) 
    let resultado = n1 - n2
    console.log(resultado)
}

function multiplicar(){
    let n1 = parseInt(prompt("Digite o primeiro número"))
    let n2 = parseInt(prompt("Digite o segundo número"))
    // Essa função devolve o tipo de dado da variável escolhida. 
    console.log(typeof(n1)) 
    console.log(typeof(n2)) 
    let resultado = n1 * n2
    console.log(resultado)
}

function dividir(){
    let n1 = parseInt(prompt("Digite o primeiro número"))
    let n2 = parseInt(prompt("Digite o segundo número"))
    // Essa função devolve o tipo de dado da variável escolhida. 
    console.log(typeof(n1)) 
    console.log(typeof(n2)) 
    let resultado = n1/n2
    console.log(resultado)
}

function quadrado(){
    let n1 = parseInt(prompt("Digite o primeiro número"))
    // Essa função devolve o tipo de dado da variável escolhida. 
    console.log(typeof(n1)) 
    let resultado = n1*n1
    console.log(resultado)
}

function nome(){
    const nome = document.getElementById("frmNome").value
    console.log(nome)
    document.getElementById("exibeNome").innerHTML = nome
}

function produto(){
    let product = document.getElementById("frmProduto").value
    let li = document.createElement("li") 
    li.innerHTML=product
    // document.getElementById("produto").innerHTML = product
    document.getElementById("produto").appendChild(li)
    console.log(product)
}

function array(){
    //array é um container para um conjunto de coisas do mesmo tipo, como um vetor. Ex: se for de números, terá apenas números.
   let n = [3, 4, 5, 6, 2, 1]
   console.log("Esse console log mostra o array completo")
   console.log(n)
   console.log("Esse console log mostra o valor no índice 0 do array")
   console.log(n[0])
   console.log("Esse console log mostra o valor no índice 1 do array")
   console.log(n[1])
   n.push(50)
   n.push(20)
   n.push(30)
   //'n' é o nome do array, o 'push' vai empurrar os valores dentro dele.
   console.log("Esse console log mostra o array completo")
   console.log(n)
   n.pop()
   //'pop' é o contrário do 'push', e sreve para tirar/pegar valores do array. Retira o último valor, e a cada pop retira um.
   console.log("Esse console log mostra o array completo")
   console.log(n)

}

function array(){
    //Produtos
    let carrinho_compras = []
   // let nome = "Arroz"
    //let preco = 9.99
    //let marca = "Tia Thabata"

    let produto = {
        nome_prod: "Arroz", 
        preco_prod: 9.99, 
        marca_prod: "Tia Thabata"
        //isso são os chamados objetos.
    }

    carrinho_compras.push(produto);

    let produto2 = {
        nome_prod: "Chocolate", 
        preco_prod: 4.00, 
        marca_prod: ""
        //isso são os chamados objetos.
    }
}

//Desafio - Criar uma função que adicione, em uma lista, o nome de um produto.

//Manipular o DOM
//Document Object Model