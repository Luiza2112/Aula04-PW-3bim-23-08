//etapa 1
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

//etapa 2
function somaNumeros(){
    let numero1 = Number(prompt("Digite um número:"))
    let numero2 = Number(prompt("Digite outro número:"))
    console.log(numero1 + numero2)
}

function subtraiNumeros(num1, num2){
    return num1-num2
}
let resultado = subtraiNumeros(10,5)
console.log(resultado)


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

//etapa 3
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

function mudaConstante(){
    const nome = prompt("Digite seu nome:")
    console.log("Nome digitado:", nome)
    nome2 = prompt("Digite outro nome:")
    console.log("Erro ao tentar alterar o valor da constante...")
}

//etapa 4

function manipulaArrays(){
    let cores = ['branco', 'azul', 'vermelho', 'verde', 'preto', 'amarelo', 'marrom', 'violeta', 'rosa', 'ciano', 'magenta', 'cinza']
    console.log(cores)
    cores.push('laranja')
    console.log(cores)
    cores.pop()
    console.log(cores)
    cores.sort()
    console.log(cores)
    cores.splice(1,1)
    console.log(cores)
    console.log("Primeiro valor:", cores[0])
    console.log("Último valor:", cores[cores.length - 1])
    cores.unshift("fucsia")
    console.log(cores)
    cores.shift()
    console.log(cores)
}

