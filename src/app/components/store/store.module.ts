//Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Custom Modules
import { SharedModule } from '../shared/shared.module';
import { StoreRoutes } from './store.router.module';

//Components
import { ListStoreComponent } from './list-store/list-store.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { DetailStoreComponent } from './detail-store/detail-store.component';
import { FormStoreComponent } from './form-store/form-store.component';
import { UpdateStoreComponent } from './update-store/update-store.component';


@NgModule({
    declarations: [
        ListStoreComponent,
        CreateStoreComponent,
        DetailStoreComponent,
        FormStoreComponent,
        UpdateStoreComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        StoreRoutes
    ],
    exports: [
        CreateStoreComponent,
        FormStoreComponent,
        StoreRoutes
    ]
})
export class StoreModule {}