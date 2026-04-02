import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownComponent } from '../drop-down-component/drop-down-component';
import { RouterLink } from '@angular/router';
import { MakeBlurComponent } from '../make-blur-component/make-blur-component';

@Component({
  selector: 'app-nav-bar-component',
  imports: [CommonModule,FormsModule,DropDownComponent,RouterLink,MakeBlurComponent],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.scss',
})
export class NavBarComponent {

  constructor(private eRef: ElementRef) {}

  navLists = signal<string[]>([
    'Features',
    'Solutions',
    'Plans',
    'Pricing',
    'Resources'
  ]);

  isDropDownOpen = false;
  currentValue = '';
  dynamicClassName = '';
  defaultClassName = 'drop-down-container';

  whileClick(navList:string,event:Event){
    if(this.currentValue == navList){
      this.isDropDownOpen = !this.isDropDownOpen;
      this.setBodyScroll();
      return;
    }
    else{
      if(navList == 'Pricing'){
        this.isDropDownOpen = false;
        this.setBodyScroll();
        return;
      }
      this.currentValue = navList;
      this.isDropDownOpen = true;
      this.setBodyScroll();
      this.dynamicClassName = `${navList.toLowerCase()}`;
      console.log(this.dynamicClassName);
      return;
    }
  }

  setBodyScroll() {
    document.body.style.overflow = this.isDropDownOpen ? 'hidden' : '';
  }

  // @HostListener('document:click', ['$event'])
  // clickOutside(event: Event) {
  //   console.log(`comes Inside clickOutside ${event}`)
  //   if (!this.eRef.nativeElement.contains(event.target)) {
  //     this.isDropDownOpen = false;
  //   }
  // }

}
