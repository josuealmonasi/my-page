import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu = [
    {
      name: 'Home',
      url: 'about',
    },
    { name: 'About', url: 'about' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
