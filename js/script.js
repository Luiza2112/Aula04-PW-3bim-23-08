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

function Cadastrar(){
    //const não muda o valor. Mas pode usar let sempre que estiver na dúvida que qual colocar.
    //.value pega apenas o valor do elemento.
    //document. diz ao JS para ir até o html e procurar aquele valor.
    const item = {
        nome: document.getElementById("prod_nome").value,
        marca: document.getElementById("prod_marca").value,
        preco: document.getElementById("prod_preco").value
    }

    //Criar um novo elemento LI:
    const lista_item = document.createElement("li")
    //Adicionar coneúdo nesse elemento:
    // lista_item.innerHTML += prod.mome //puxei o nome do objeto
    // lista_item.innerHTML += prod.marca
    // lista_item.innerHTML += prod.preco
    const prod_nome = document.createElement("h3")
    const prod_marca = document.createElement("h4")
    const prod_preco = document.createElement("p")
    prod_nome.innerHTML = item.nome
    prod_marca.innerHTML = item.marca
    prod_preco.innerHTML = item_preco
    lista_item.appendChild(prod_nome)
    lista_item.appendChild(prod_marca)
    lista_item.appendChild(prod_preco)

    //Adicionar esse LI no UL:
    document.getElementById("lista_prod").appendChild(lista_item)
    console.log(lista_item)
}

//parâmetros
function Nome(param1, param2){
    //código
    //return()
}

(param1, param2) => {
    //código
    return
}

() => {

}

//Funçao Map - vai ler o array

const novoNumeros= []
const numeros = [5, 48, 65, 33, 12]
//for 0 < numeros.lenght
numeros.map( (num) => {
    novoNumeros.push(num * 2)
} )
console.log(numeros)
console.log(novoNumeros)
//Para cada elemento do array, irá executar a função acima.
 
const numbers = [1, 2, 5, 7, 6, 34, 20, 89, 54, 27, 55, 61, 32, 48, 45, 36, 17, 18, 33, 62]
const newNumbers = []

numbers.map((num) => {
    if (num %2 === 0){
        newNumbers.push(num)
    }
})
console.log(numbers)
console.log(newNumbers)

//Desafio - Criar uma função que adicione, em uma lista, o nome de um produto.

//Manipular o DOM
//Document Object Model