function olaMundo(){
    alert('Olá mundo!');
}

function mostraNome(){
    let nome = prompt("Digite seu nome:")
    console.log(nome)
}

function concatenaPalavras(){
    let palavra1 = prompt("Digite a 1° palavra:")
    let palavra2 = prompt("Digite a 2° palavra:")
    let concatenacao = palavra1 + palavra2
    console.log(concatenacao)
}

function criaObjeto(){
    let nome = prompt("Digite seu nome:")
    let idade = parseInt(prompt("Digite sua idade:"))
    let time = prompt("Digite o nome do seu time de futebol favorito:")
    let usuario = {
        nome_usuario: nome,
        idade_usuario: idade,
        time_usuario: time
    }

    console.log(usuario)
}