//Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        AdminUsersComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        
    ]
})
export class AdminModule {}