import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Custom Module
import { UserRoutes } from './user.router.module';
//Components
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { SellersComponent } from './sellers/sellers.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
    declarations: [
        ProfileComponent,
        SellersComponent,
        UserDetailComponent
    ],
    imports: [
        CommonModule,
        UserRoutes,
        SharedModule
    ],
    exports: [
        
    ]
})
export class UserModule {}