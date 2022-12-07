import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './View/navbar/navbar.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './View/footer/footer.component';
import { TopbarComponent } from './View/topbar/topbar.component';
import { IndexContentComponent } from './View/index-content/index-content.component';
import { LoginComponent } from './View/login/login.component';
import { ContactComponent } from './View/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    IndexContentComponent,
    ContactComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
