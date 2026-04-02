import { CommonModule, NgClass } from '@angular/common';
import { AfterContentInit, Component, Input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-drop-down-component',
  imports: [NgClass,CommonModule,FormsModule],
  templateUrl: './drop-down-component.html',
  styleUrl: './drop-down-component.scss',
})
export class DropDownComponent{

  @Input() className = '';
  type = typeof(this.className);
  features(){
    return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  }
  solutions(){
    return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
     quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
     lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
     lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
     lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod .`
  }
}
