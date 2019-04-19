import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { ProfileComponent } from './profile/profile.component';
import { SellersComponent } from './sellers/sellers.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

//Resolvers
import { UserResolver } from 'src/app/core/resolvers/user.resolver';

const routes: Routes = [
        { path: '', component: ProfileComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'sellers', component: SellersComponent },
        { path: 'details/:id', component: UserDetailComponent, resolve: {ueserR: UserResolver} },
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