import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Output()
  modalControl: boolean = false;

  public taskList: TaskList[] = [
    { task: "Minha nova task", checked: false},
    { task: "Minha nova task 2", checked: false}
  ]

  public deleteItem(event: number) {
    this.taskList.splice(event,1)
  }

  public confirmDeleteAll():void {
    this.taskList = []
    this.modalControl = false;
  }

  public doNotDeleteAll():void {
    this.modalControl = false;
  }

  public showModal():void {
    this.modalControl = true;
  }

} 

function Output(): (target: TodoListComponent, propertyKey: "modalControl") => void {
  throw new Error('Function not implemented.');
}

