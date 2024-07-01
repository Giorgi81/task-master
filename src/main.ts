import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {AppComponent} from './app/app.component';
import {routes} from './app/app.routes';
import {importProvidersFrom} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TokenInterceptor} from "./app/token.interceptor";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

bootstrapApplication(AppComponent, {
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
    provideAnimationsAsync()
  ]
}).catch(err => console.error(err));
