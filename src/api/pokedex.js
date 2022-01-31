export const API = 'https://pokeapi.co/api/v2/';


export const Pokemonnames = valueNamePokemon => `pokemon/${valueNamePokemon}`;

export const getPokemonDetailByName = async (valueNamePokemon) => {
    return await fetch(`${API}${Pokemonnames(valueNamePokemon.toLowerCase())}`)
        .then(response => response.json())
        .then(responseJson => {
            return pokemonResource(responseJson);
        })
        .catch(error => {
            console.error({ error });
        })
}

export const pokemonResource = bodyResponsePokemon => {
    return {
        habilidades: bodyResponsePokemon.abilities,
        movimientos: bodyResponsePokemon.moves,
        imagen: bodyResponsePokemon.sprites.front_default,
    }
}