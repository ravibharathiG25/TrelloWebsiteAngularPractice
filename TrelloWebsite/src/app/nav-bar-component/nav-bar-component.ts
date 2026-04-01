import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownComponent } from '../drop-down-component/drop-down-component';

@Component({
  selector: 'app-nav-bar-component',
  imports: [CommonModule,FormsModule,DropDownComponent],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.scss',
})
export class NavBarComponent {
  navLists = signal<string[]>([
    'Features',
    'Solutions',
    'Plans',
    'Pricing',
    'Resources'
  ]);

  isDropDownOpen = false;
  currentValue = '';

  whileClick(navList:string){
    if(this.currentValue == navList){
      this.isDropDownOpen = !this.isDropDownOpen;
      return;
    }
    this.currentValue = navList;
    this.isDropDownOpen = true;
  }

}
