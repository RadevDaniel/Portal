//Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Application Modules
import { HomeModule } from './components/home/home.module';
import { SharedModule } from './components/shared/shared.module';
import { AdminModule } from './components/admin/admin.module';


//Components
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule,
    AppRouterModule,
    AdminModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
