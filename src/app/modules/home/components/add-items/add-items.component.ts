import { Component, EventEmitter, Output, ViewChild, ElementRef  } from '@angular/core';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent {
  @ViewChild('input') input!: ElementRef;
  @Output() sendInputValue = new EventEmitter<string>();
  taskInput: string = '';

  sendTextInput(value: string) {
    this.taskInput = value;
    this.taskInput = this.taskInput.trim();
    if(this.taskInput) {
      this.sendInputValue.emit(this.taskInput);
    }  
    this.input.nativeElement.value = '';

  }
  
  

}
