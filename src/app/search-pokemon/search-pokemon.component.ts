import { Component, OnInit } from '@angular/core';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { Pokemon } from '../pokemon';
import { PokeApiService } from '../poke-api.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css'],
  providers: [PokeApiService]
})
export class SearchPokemonComponent implements OnInit {

  name: string;
  selectedPokemon : Pokemon;
  errorMessage : string;

  constructor(private client : PokeApiService) { }

  ngOnInit(): void {
  }

  selectPokemon(name) {
    this.errorMessage = '';
    this.client.getPokemonByName(name)
    .then(pokemon => this.selectedPokemon = pokemon)
    .catch(err => {
      this.errorMessage = 'We couldn\'t find your pokémon.';
      console.log('Error call API - getPokemonByName', err);
    })
  }
}
