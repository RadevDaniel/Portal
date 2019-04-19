import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Custom Module
import { UserRoutes } from './user.router.module';
//Components
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { SellersComponent } from './sellers/sellers.component';


@NgModule({
    declarations: [
        ProfileComponent,
        SellersComponent
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