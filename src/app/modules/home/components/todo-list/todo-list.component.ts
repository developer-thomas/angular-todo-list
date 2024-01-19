import { Component, Output, EventEmitter } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  modalControl:boolean = false;
  public taskList: TaskList[] = [
    { task: "Minha nova task", checked: false},
    { task: "Minha nova task 2", checked: false}
  ]

  public deleteItem(event: number) {
    this.taskList.splice(event,1)
  }

  public confirmDeleteAll() {
    this.taskList = []
    
  }

} 


