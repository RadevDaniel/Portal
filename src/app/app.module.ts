//Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './router.module';

//Application Modules
import { HomeModule } from './components/home/home.module';
import { StoreModule } from './components/store/store.module';
import { SharedModule } from './components/shared/shared.module';

//Components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule,
    AppRouterModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
