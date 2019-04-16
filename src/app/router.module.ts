import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home-component/home.component';
import { CreateStoreComponent } from './components/store/create-store/create-store.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'create', component: CreateStoreComponent },
//   { path: 'posts', loadChildren: './components/post/post.module#PostModule' }

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