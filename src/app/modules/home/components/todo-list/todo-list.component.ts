import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  modalControl: boolean = true;
  public taskList: TaskList[] = [
    { task: "Minha nova task", checked: false},
    { task: "Minha nova task 2", checked: false}
  ]

  public deleteItem(event: number) {
    this.taskList.splice(event,1)
  }

  public deleteAll() {
    this.modalControl = true;
    this.taskList = [];
  }

  showModal() {

  }
} 
