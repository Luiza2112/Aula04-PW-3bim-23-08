const BASEURL = 'https://pokeapi.co/api/v2/pokemon/'
const BASEURLIMG = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
//const pokemonImg = document.querySelector('.pokemon_img')

const fetchPokemon = async (pokemon) => {
//'await' é apenas para funções assíncronas, e o 'async' define a função como tal.
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    }
  }

//Revisar: nome do Pokemon não está aparecendo, não sei o que está errado.
const showPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    //pokemonImg.src = data['sprites']['versions']['generation']
}

