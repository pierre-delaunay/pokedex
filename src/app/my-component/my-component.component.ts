import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: string = '';
  selectedPokemon: Pokemon;

  pokemons = [
//    new Pokemon(1, 'Bulbasaur'),
//    new Pokemon(2, 'Ivysaur'),
//    new Pokemon(3, 'Venusaur'),
//    new Pokemon(4, 'Charmander')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  clickOnGo(Pokemon): void {
    console.log(Pokemon.getName());
  }
}
