import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ){}

 async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();

    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      this.handleExceptions(error);
    }


  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(term: string) {
    
    let pokemon: Pokemon | null = null;

    if (!isNaN(+term)) {
      pokemon = await this.pokemonModel.findOne({no: term}) 
    }

    if (!pokemon && term.match(/^[0-9a-fA-F]{24}$/)) {
      pokemon = await this.pokemonModel.findById(term);
    }

    if (!pokemon) {
      pokemon = await this.pokemonModel.findOne({name: term.toLocaleLowerCase().trim() });
    }

    if (!pokemon) {
      throw new NotFoundException(`Pokemon whit id:"${term}" not found`);
    }
    
    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.findOne(term);

   if (updatePokemonDto.name) 
      updatePokemonDto.name = updatePokemonDto.name.toLowerCase();

   try {
        await pokemon.updateOne(updatePokemonDto, {new: true})
   
    return { ...pokemon.toJSON(), ...updatePokemonDto};
   } catch (error) {
    this.handleExceptions(error);
    
   }


  }

  async remove(id: string) {  
    // const pokemon = await this.findOne(id);
    // await pokemon.deleteOne();
    // return {id}

   const {deletedCount} = await this.pokemonModel.deleteOne({_id: id});

   if (deletedCount === 0) {
      throw new BadRequestException(`Pokemon with id "${id}" not found`)
   }

    return ;
  }


  private handleExceptions(error: any) {
      if (error.code === 11000) {
        throw new BadRequestException(`Pokemon exists in db ${JSON.stringify(error.keyValue)}`);
      }

      console.log(error)
      throw new InternalServerErrorException(`Cant create Pokemon- check server logs`);
  }
}
