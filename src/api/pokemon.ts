
interface PokemonDetailProps {
    name:string;
    id:number;
    height:number;
    weight:number;
    sprites:{
        front_default:string;
    }
}
 
export async function getPokemon(id:string): Promise<PokemonDetailProps> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
}

type Pokemon = {
    id:string;
    name:string;
}

export const getPokemonList = async ():Promise<Pokemon[]> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const data = (await response.json()) as {
        results: {name:string; url:string}[]
    };
    return data.results.map((r) =>({
        id: r.url.split('/').slice(-2, -1)[0] ?? '',
        name: r.name,
    }));
}