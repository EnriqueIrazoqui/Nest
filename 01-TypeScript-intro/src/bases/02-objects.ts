export const pokemonIds = [1,20,30,34,66];

// export const pokemon = {
//     id: 1,
//     name: 'Bolbasor',
//     age: 23
// }

interface Pokemon{
    id: number;
    name: string;
    age: number;
}

export const bolbasor:Pokemon = {
    id: 1,
    name: 'Bolbasor',
    age: 2,
}

export const charmander:Pokemon = {
    id: 2,
    name: 'charmander',
    age: 1,
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bolbasor);

console.log(pokemons);