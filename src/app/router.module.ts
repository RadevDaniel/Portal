import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home-component/home.component';
import { CreateStoreComponent } from './components/store/create-store/create-store.component';
import { UpdateStoreComponent } from './components/store/update-store/update-store.component';
import { ListStoreComponent } from './components/store/list-store/list-store.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'create', component: CreateStoreComponent },
    { path: 'products', component: ListStoreComponent },
    { path: 'products/update/:id', component: UpdateStoreComponent },
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