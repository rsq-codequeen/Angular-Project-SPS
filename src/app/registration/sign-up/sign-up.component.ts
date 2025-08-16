import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product, ProductService } from '../../services/product.service';


@Component({
  selector: 'app-register',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  
})
export class SignUpComponent implements OnInit {
  title: string = "hayloo";
  classes: string = "danger";
  message: string = "this is being updated by ngClass directive";
  selectedCOlor: string = "green";
  check: boolean = false;
  names = ['rida', 9, 'jdfj', 89, 'sdfk'];
  Pipping = "pipping";
  today: number = Date.now();
  currency: number = 4.567;
  posts: any = [];
  servicemessage: Product[] = [];

  constructor(private ps: ProductService) {
    this.servicemessage = ps.getProductData();
  }

  ngOnInit() {
    //this way is deprecated
    // this.ps.getPosts().subscribe(
    //   (response) => {
    //     this.posts = response;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
  // );
      this.ps.getPosts().subscribe(
        {
          next:(response)=>{
            this.posts = response;
          },
          error:(error=>{
             console.log(error);
          })
        }
      )
    

  }
}