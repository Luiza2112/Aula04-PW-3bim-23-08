function Cadastrar() {
    const item = {
        nome: document.getElementById("prod_nome").value,
        marca: document.getElementById("prod_marca").value,
        preco: document.getElementById("prod_preco").value
    };

    // Criar um novo elemento LI:
    const lista_item = document.createElement("li")

    // Adicionar conteúdo nesse elemento:
    const prod_nome = document.createElement("h3")
    const prod_marca = document.createElement("h4")
    const prod_preco = document.createElement("p")

    prod_nome.innerHTML = item.nome;
    prod_marca.innerHTML = item.marca;
    prod_preco.innerHTML = item.preco;

    // Criar um novo elemento DIV para o bloco com cor:
    const corBlock = document.createElement("div")
    corBlock.classList.add("cor-block")
    lista_item.appendChild(corBlock)

    // Adicionar os elementos ao LI:
    lista_item.appendChild(prod_nome)
    lista_item.appendChild(prod_marca)
    lista_item.appendChild(prod_preco)

    // Adicionar esse LI no UL:
    document.getElementById("lista_prod").appendChild(lista_item)
    console.log(lista_item)
}
