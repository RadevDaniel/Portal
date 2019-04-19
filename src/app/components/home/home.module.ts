//Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HomeComponent } from './home-component/home.component';
import { AuthModule } from '../authentication/auth.module';
import { PopularUsersComponent } from '../shared/popular-users/popular-users.component';


@NgModule({
    declarations: [
        HomeComponent,
        PopularUsersComponent
    ],
    imports: [
        CommonModule,
        AuthModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}
