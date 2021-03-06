//Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { NavigationComponent } from './navigation/navigation.component';
import { ProductCardComponent } from './product-card/product-card.component';


//Directives
import { HoverIconDirective } from './directives/icon-hover.directive';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DetailComponent } from './detail/detail.component';
import { PopularUsersComponent } from './popular-users/popular-users.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        NavigationComponent,
        ProductCardComponent,
        HoverIconDirective,
        SideNavComponent,
        DetailComponent,
        PopularUsersComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavigationComponent,
        ProductCardComponent,
        SideNavComponent,
        DetailComponent,
        PopularUsersComponent,
        FooterComponent
    ]
})
export class SharedModule {}
