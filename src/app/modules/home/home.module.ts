import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BtnDeleteAllComponent } from './components/btn-delete-all/btn-delete-all.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    BtnDeleteAllComponent,
    AddItemsComponent,
    TodoListComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
