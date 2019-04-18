import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { ListStoreComponent } from './list-store/list-store.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { DetailStoreComponent } from './detail-store/detail-store.component';
import { FormStoreComponent } from './form-store/form-store.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
import { SharedModule } from '../shared/shared.module';

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
        SharedModule
    ],
    exports: [
        CreateStoreComponent,
        FormStoreComponent
    ]
})
export class StoreModule {}