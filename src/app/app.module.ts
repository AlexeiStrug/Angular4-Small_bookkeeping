import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './shared/services/user.service';
import {AuthService} from './shared/services/auth.service';
import {BaseApi} from './shared/base/base-api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './shared/services/auth.guard';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, AuthService, BaseApi, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
