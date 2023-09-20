function exercicio1(){
    const usuario={
        nome: document.getById("InputNome").value,
        CPF: document.getById("InputCPF").value,
        dataNascimento: document.getById("InputdataNascimento").value,
    }

    let usuarioCadastro = []
    usuarioCadastro.push(Usuario)
}

function enviar(){
    const nome = document.getElementById("InputNome").value
    const senha = document.getElementById("InputSenha").value
    const confirmaSenha = document.getElementById("InputconfirmaSenha").value
    const mensagemErro = document.getElementById("MessageErro")
    
    if(senha === confirmaSenha){
        mensagemErro.InnerHTML = ""
        console.log("Senha coincidida")
    }else{
        mensagemErro.InnerHTML = "Senha errada"
        console.log("Senhas não coincidiram")
    }

    console.log("Senha:" + senha)
    console.log("Confirmação Senha:" + confirmaSenha)
}