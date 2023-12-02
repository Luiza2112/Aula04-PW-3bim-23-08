const BASEURL = 'https://pokeapi.co/api/v2/pokemon/'
const BASEURLIMG = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonImg = document.querySelector('.pokemon_img')

const form = document.querySelector('.form')
const input = document.querySelector('.input_search')
const buttonVoltar = document.querySelector('.voltar')
const buttonProximo = document.querySelector('.proximo')

let searchPokemon = 1

//Procura Pokémon na API
const fetchPokemon = async (pokemon) => {
//'await' é apenas para funções assíncronas, e o 'async' define a função como tal.
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    }
  }

//Mostra os dados encontrados do Pokémon
const showPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Procurando...'
    pokemonNumber.innerHTML = ''

    const data = await fetchPokemon(pokemon);

    if (data) {
      pokemonImg.style.display = 'block'
      pokemonName.innerHTML = data.name
      pokemonNumber.innerHTML = data.id
      pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']
      ['animated']['front_default']
      input.value = ''
      searchPokemon = data.id
    } else {
        pokemonImg.style.display = 'none'
        pokemonName.innerHTML = 'Não encontrado'
        pokemonNumber.innerHTML = ''
        input.value = ''
    }
}

//Pega os dados inseridos no formulario para fazer a procura do Pokémon
form.addEventListener('submit', (event) => {
  event.preventDefault()
  showPokemon(input.value.toLowerCase())
})

buttonVoltar.addEventListener('click', () => {
  if (searchPokemon > 1){
    searchPokemon -= 1
    showPokemon(searchPokemon)
  }
  
})

buttonProximo.addEventListener('click', () => {
  searchPokemon += 1
  showPokemon(searchPokemon)
})

showPokemon(searchPokemon)