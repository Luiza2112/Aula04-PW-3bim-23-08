function login(){
    var email = document.getElementById("frmemail").value
    var password = document.getElementById("frmpassword").value
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
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    // Essa função devolve o tipo de dado da variável escolhida. 
    console.log(typeof(n1)) 
    console.log(typeof(n2)) 
    var resultado = n1 + n2
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


//Desafio - Criar uma função que adicione, em uma lista, o nome de um produto.

//Manipular o DOM
//Document Object Model