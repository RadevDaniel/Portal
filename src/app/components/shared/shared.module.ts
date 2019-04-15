//Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavigationComponent
    ]
})
export class SharedModule {}
