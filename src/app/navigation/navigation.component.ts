import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() toggleMenuState = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.toggleMenuState.emit();
  }

}
