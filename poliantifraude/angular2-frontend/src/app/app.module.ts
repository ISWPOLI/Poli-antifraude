import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent }  from './app.component';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { HomeComponent} from './components/home/home.component';
import { ProfileComponent}  from './components/profile/profile.component';
import { WebCamComponent}  from './components/webcam/webcam.component';

import{Auth} from './services/auth.service';
import {AuthGuard} from './auth.guard';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent, WebCamComponent],
  bootstrap:    [ AppComponent ],
  providers: [
    appRoutingProviders,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    Auth,
    AuthGuard
  ]

})
export class AppModule { }
