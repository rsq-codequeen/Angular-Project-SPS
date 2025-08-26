import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditorModule } from 'primeng/editor';
@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    CardModule,
    ReactiveFormsModule,
    EditorModule,
    FormsModule
  ]
})
export class TodoModule { }
