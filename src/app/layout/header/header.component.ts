import { Component, OnInit, HostListener } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mobile = false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = event.target.innerWidth <= 600;
  }
  menuIcon = faBars;
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
