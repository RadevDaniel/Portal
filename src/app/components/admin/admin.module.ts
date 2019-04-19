//Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { AdminUsersComponent } from './admin-users/admin-users.component';


@NgModule({
    declarations: [
        AdminUsersComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        
    ]
})
export class AdminModule {}