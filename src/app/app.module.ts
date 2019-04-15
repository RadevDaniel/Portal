//Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Application Modules
import { HomeModule } from './components/home/home.module';

//Components
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
