//Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Custom Modules
import { SharedModule } from '../shared/shared.module';
//Components
import { HomeComponent } from './home-component/home.component';
import { AuthModule } from '../authentication/auth.module';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        AuthModule,
        SharedModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}
