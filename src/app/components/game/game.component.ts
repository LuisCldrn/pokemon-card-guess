import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/common/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  ngOnInit(): void {
    this.getCard()
    this.getPokemons()

  }

  constructor(
    private cardsService: CardsService,
  ) {
  }

  selectedCard!: Card;
  allCards: Card[] = this.cardsService.cardList
  pokemons: string[] =[];
  sets: string[] = [];
  selectedPokemon: string = '';
  selectedSet: string = ''
  message: string = '';
  wrongAlert: string = ''

  setPokemon(poke: string) {
    this.selectedPokemon = poke;
  }

  setSet(set: string) {
    this.selectedSet = set;
  }

  getPokemons() {
    this.cardsService.cardList.forEach(e => {
      if(this.pokemons.indexOf(e.pokemon) === -1) {
        this.pokemons.push(e.pokemon);
      }

      if(this.sets.indexOf(e.set_name) === -1) {
        this.sets.push(e.set_name);
      }

      this.sets.sort();
      this.pokemons.sort();

    })
  }

  getCard() {

    this.message = '';
    this.wrongAlert = ''
    this.selectedCard = this.cardsService.cardList[ Math.ceil( Math.random() * 130)];

  }

  checkGuess() {

    this.message = '';
    this.wrongAlert = '';

    if (this.selectedPokemon === this.selectedCard.pokemon && this.selectedSet === this.selectedCard.set_name)
    {
      this.message = 'You won Congrats!'
    }

    else {
      this.wrongAlert = "Try Again"
    }

    console.log(this.selectedPokemon === this.selectedCard.pokemon && this.selectedSet === this.selectedCard.set_name);
    console.log(this.selectedPokemon, this.selectedSet);
  }

}
