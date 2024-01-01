import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shered/header/header.component';
import { FooterComponent } from './shered/footer/footer.component';
import { PorfolioComponent } from './pages/porfolio/porfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemsComponent } from './pages/items/items.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PorfolioComponent,
    AboutComponent,
    ItemsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
