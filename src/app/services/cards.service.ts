import { Injectable } from '@angular/core';
import { Card } from '../common/card';
import cards from '../../assets/images/cards.json';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cardList: Card[] = cards;

  constructor() { }
}
