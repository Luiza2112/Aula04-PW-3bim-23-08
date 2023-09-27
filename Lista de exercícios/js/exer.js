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

function somaNumeros(){
    let numero1 = Number(prompt("Digite um número:"))
    let numero2 = Number(prompt("Digite outro número:"))
    console.log(numero1 + numero2)
}

function subtraiNumeros(){
    //não feita
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
function calculadora(){
    let operacao = prompt("Digite o sinal da operação: (+, -, * ou /)")
    let n1 = Number(prompt("Digite o primeiro número da operação:"))
    let n2 = Number(prompt("Digite o segundo número da operação:"))

    switch(operacao){
        case '+':
            console.log(n1 + n2)
            break;
            
        case '-':
            console.log(n1-n2)
            break;
        
        case '*':
            console.log(n1*n2)
            break; 
        
        case "/":
            console.log(n1/n2);
            break;
        }

}

function constante(){
    const nome = prompt("Digite seu nome:")
    console.log(nome)

    //incompleto
}