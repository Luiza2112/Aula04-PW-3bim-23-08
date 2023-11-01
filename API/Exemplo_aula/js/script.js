const BASEURL = 'https://pokeapi.co/api/v2/pokemon'

function getPokemonList(){
    let listaPokemons = []
    fetch(BASEURL + '?limit=151').then( Response => {
        if (Response.status == 200){
            listaPokemons = Response.json().then( json => {json.results.map( pokemon => {console.log(pokemon)})})
            return json}})
            return listaPokemons
}