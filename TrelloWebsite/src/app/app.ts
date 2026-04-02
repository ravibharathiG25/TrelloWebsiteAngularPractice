import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { HomePageComponent } from './home-page-component/home-page-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent,HomePageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TrelloWebsite');
}
