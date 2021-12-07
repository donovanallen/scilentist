import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent },
        { path: "about", component: AboutComponent },
        { path: "portfolio", component: PortfolioComponent },
        { path: "contact", component: ContactComponent },
        // { path: "**", component: PageNotFoundComponent }
      ],
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    // FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
