import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())

    const pokemons = data.results.map(pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
    }))

    //throw new Error('Esto es un error que no deberia de suceder')

    return pokemons
    
} 




export default async function PokemonsPage() {

    const pokemons = await getPokemons(151)
    pokemons[0]
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de pokemons <small>estaticos</small></span>
      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}