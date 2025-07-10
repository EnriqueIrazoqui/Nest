import axios from 'axios';
import type { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
export class Pokemon{

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number, 
        public name: string,
        // public imageUrl: string,
       ) {}

        scream() {
            console.log(`${this.name.toUpperCase()}!!!`);
       }

        speak() {
         console.log(`${this.name}, ${this.name}`);
       }

       async getMoves(): Promise<Move[]> {
        // const moves = 10;
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
       console.log(data.moves);

        return data.moves;
        
       }
    }

export const charmander = new Pokemon( 2, 'Charmander'); 

// charmander.speak();
// charmander.scream();
// console.log(charmander.imageUrl);
// charmander.id = 10;

console.log(charmander.getMoves());
