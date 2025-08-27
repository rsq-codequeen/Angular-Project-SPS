import { Routes } from '@angular/router';

export const routes: Routes = [
    {
         path: 'registration',
         loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
    },
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    
];
