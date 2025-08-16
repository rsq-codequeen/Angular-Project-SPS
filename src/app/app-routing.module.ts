import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'login', 
    loadChildren: () => import('./registration/login/login.module')
      .then(m => m.LoginModule) 
  },
  { 
    path: 'sign-up', 
    loadChildren: () => import('./registration/sign-up/sign-up.module')
      .then(m => m.SignUpModule) 
  },
  { path: 'todo', loadChildren: () => import('./registration/todo/todo.module').then(m => m.TodoModule) },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
   // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }