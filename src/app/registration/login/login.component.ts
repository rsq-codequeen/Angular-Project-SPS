import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    data:any[]=[];
    datas:any[]=[];
    observable=new Observable((observer)=>{
      observer.next([1,2,3,4,5])
    })
    secondObservable=new Observable((observer)=>{
     setTimeout(()=>{observer.next(1)},1000 )
      setTimeout(()=>{observer.next(1)},2000 )
      setTimeout(()=>{observer.next(1)},3000 )
      setTimeout(()=>{observer.next(1)},4000 )
      setTimeout(()=>{observer.next(8)},5000 )
    })
    GetSyncData(){
      console.log('yess')
      this.observable.subscribe((val:any)=>{
        this.data=val;
      })
    }

    GetSecondObservable(){
      this.secondObservable.subscribe((val:any)=>{
        this.datas.push(val)
      })
    }
}
