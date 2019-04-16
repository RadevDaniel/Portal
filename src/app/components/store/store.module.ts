import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { ListStoreComponent } from './list-store/list-store.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { DetailStoreComponent } from './detail-store/detail-store.component';
import { FormStoreComponent } from './form-store/form-store.component';

@NgModule({
    declarations: [
        ListStoreComponent,
        CreateStoreComponent,
        DetailStoreComponent,
        FormStoreComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CreateStoreComponent,
        FormStoreComponent
    ]
})
export class StoreModule {}