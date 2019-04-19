import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home-component/home.component';

//Guards
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'products', loadChildren: './components/store/store.module#StoreModule', canActivate: [AuthGuard] },
    { path: 'users', loadChildren: './components/user/user.module#UserModule',  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }