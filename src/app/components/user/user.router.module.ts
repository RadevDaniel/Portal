import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Resolvers
//import { ProductResolver } from 'src/app/core/product.resolver';

//components
import { ProfileComponent } from './profile/profile.component';
import { SellersComponent } from './sellers/sellers.component';

//Components

const routes: Routes = [
        { path: '', component: ProfileComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'sellers', component: SellersComponent },
    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutes{ }