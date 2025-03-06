import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())

    const pokemons = data.results
    
} 




export default async function PokemonsPage() {

    const pokemons = await getPokemons(151)
    pokemons[0]
  return (
    <div>
      {JSON.stringify(pokemons)}
    </div>
  );
}