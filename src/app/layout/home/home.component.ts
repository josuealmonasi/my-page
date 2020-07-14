import { CardModel } from './../../models/card.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: CardModel[];

  constructor() {}

  ngOnInit(): void {
    this.cards = [
      {
        info: 'code snippet',
        linkText: 'get now',
        title: 'Image Captions',
        url: 'https://www.google.com/',
      },
      {
        info: 'code snippet',
        linkText: 'get now',
        title: 'Image Captions',
        url: 'https://www.google.com/',
      },
      {
        info: 'code snippet',
        linkText: 'get now',
        title: 'Image Captions',
        url: 'https://www.google.com/',
      },
      {
        info: 'code snippet',
        linkText: 'get now',
        title: 'Image Captions',
        url: 'https://www.google.com/',
      },
      {
        info: 'code snippet',
        linkText: 'get now',
        title: 'Image Captions',
        url: 'https://www.google.com/',
      },
      {
        info: 'code snippet',
        linkText: 'get now',
        title: 'Image Captions',
        url: 'https://www.google.com/',
      },
      {
        info: 'code snippet',
        linkText: 'get now',
        title: 'Image Captions',
        url: 'https://www.google.com/',
      },
    ];
  }
}
