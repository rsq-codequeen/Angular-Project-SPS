import { Injectable } from '@angular/core';
import { Todo } from '../todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseUrl:string="http://localhost:4200/todo"
  constructor (private httpClient: HttpClient){
  }
  getTodo():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }
  saveTodo(todo:Todo):Observable<Todo>{
    return this.httpClient.post<Todo>(this.baseUrl,todo)
  }

}
