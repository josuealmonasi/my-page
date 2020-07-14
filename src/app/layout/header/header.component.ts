import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu = [
    { name: 'Home', url: '', current: true },
    { name: 'Resume', url: 'resume', current: false },
    { name: 'Portfolio', url: 'portfolio', current: false },
    { name: 'About', url: 'about', current: false },
  ];
  constructor() {}

  ngOnInit(): void {}

  setCurrent(i: number): void {
    this.menu.map(e => {
      e.current = false;
    });
    this.menu[i].current = true;
  }
}
