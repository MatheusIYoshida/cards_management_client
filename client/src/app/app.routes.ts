import { Routes } from '@angular/router';
import { AuthLayout } from './shared/layouts/auth-layout/auth-layout';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                loadComponent: () => import('./login/login').then(m => m.Login)
            },
            {
                path: 'register',
                loadComponent: () => import('./register/register').then(m => m.Register)
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
        ]
    }
    // {
    //     path: 'dashboard',
    //     component:
    //     canActivate: [AuthGuard]
    // },
];
