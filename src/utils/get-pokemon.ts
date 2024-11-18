import { Pokemon, PokemonListResponse } from '~/typings/pokemon.entity';

const MAX_ITEM_PER_PAGE = 9;

export async function getPokemon(page?: string): Promise<Array<Pokemon>> {
  const offset = Number.parseInt(page || '0') * MAX_ITEM_PER_PAGE;

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${MAX_ITEM_PER_PAGE}`
  );
  const data: PokemonListResponse = await res.json();

  const pokemonMeta = data.results.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();
    return data;
  });

  return Promise.all(pokemonMeta);
}
