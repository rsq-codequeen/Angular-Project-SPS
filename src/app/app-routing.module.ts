import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path: 'registration', // Your top-level path
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  },
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
   // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }