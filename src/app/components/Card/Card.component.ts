import { Component, Input, OnInit } from '@angular/core';

export interface Card {
  title: string,
  description: string,
  image: string
}
@Component({
  selector: 'app-card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data!: Card;

  constructor() { }

  ngOnInit() {
  }

}
