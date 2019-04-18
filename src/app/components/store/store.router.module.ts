import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Resolvers
import { ProductResolver } from 'src/app/core/product.resolver';

//Components
import { DetailStoreComponent } from './detail-store/detail-store.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { ListStoreComponent } from './list-store/list-store.component';

const routes: Routes = [
        { path: '', component: ListStoreComponent },
        { path: 'create', component: CreateStoreComponent },
        { path: 'detail/:id', component: DetailStoreComponent, resolve: {productR: ProductResolver} },
        { path: 'update/:id', component: UpdateStoreComponent }
    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class StoreRoutes{ }