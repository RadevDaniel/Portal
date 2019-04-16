//Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavigationComponent
    ]
})
export class SharedModule {}
