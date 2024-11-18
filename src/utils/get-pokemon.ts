import { Pokemon, PokemonListResponse } from '~/typings/pokemon.entity';

const MAX_ITEM_PER_PAGE = 9;

export async function getPokemons(page?: string): Promise<Array<Pokemon>> {
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

export async function getPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data: Pokemon = await res.json();

  return data;
}

// export async function getPokemonEvolution(speciesUrl: string) {
//   const resSpecies = await fetch(speciesUrl);
//   const species = await resSpecies.json();

//   const resEvolution = await fetch(species.evolution_chain.url);
//   const evolution = await resEvolution.json();

//   const pokemons = [];

//   async function deepFetch(data: any) {
//     const res = await fetch(data[0].)
//   }
// }
