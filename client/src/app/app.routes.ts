import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        component:
    },
    {
        path: 'dashboard',
        component:
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
