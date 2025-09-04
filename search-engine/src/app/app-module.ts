import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Upload } from './upload/upload';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { SearchPipe } from './pipes/search-pipe';

@NgModule({
  declarations: [
    App,
    Home,
    Navbar,
    Upload,
    SearchPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
