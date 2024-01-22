import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public emptyInputModalControl: boolean = true;
  public taskList: TaskList[] = JSON.parse(localStorage.getItem("tasks") || '[]')

  public deleteItem(event: number) {
    this.taskList.splice(event,1)
  }

  public confirmDeleteAll() {
    this.taskList = []
  }

  public getNewTask(taskEvent: string) {
    this.taskList.push({task: taskEvent, checked: false})
  }

  ngDoCheck() {
    this.setLocalStorage()
  }

  public validationInput(event: string, index: number) {

    if(!event.length) {
      const confirm = window.confirm('Task vazia. Deseja excluí-la?')
      if(confirm) {
        this.deleteItem(index);
      }
    }
  }

  public setLocalStorage() {
    if(this.taskList) {
    this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked))
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
    }
  }
} 


