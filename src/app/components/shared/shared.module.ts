//Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { NavigationComponent } from './navigation/navigation.component';
import { ProductCardComponent } from './product-card/product-card.component';


//Directives
import { HoverIconDirective } from './directives/icon-hover.directive';

@NgModule({
    declarations: [
        NavigationComponent,
        ProductCardComponent,
        HoverIconDirective
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavigationComponent,
        ProductCardComponent
    ]
})
export class SharedModule {}
