import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface Product {
  name: string;
  branch: string;
  price: string; // or `number` if price should be numeric
}
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  private apiUrl= 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) {
    
   }
   getPosts():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
   }
    getProductData():Product[]{
    return [
      {name:'mobile',branch:'samsung',price:'2000'},
      {name:'PC',branch:'HP',price:'300000'},
      {name:'Tablet',branch:'Dell',price:'1000'},
    ]
  }
}
