export class Pokemon{
    public id: number ;
    public name: string ;

    constructor( id, name) {
        this.id = id;
        this.name = name;
        console.log('Constructor llamando');
    }
}

export const charmander = new Pokemon(); 