import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/pages/home-page/hero-section/hero-section.component';
import { HeaderComponent } from './components/pages/home-page/hero-section/header/header.component';
import { NavigationComponent } from './components/reusable/navigation/navigation.component';
import { LinkComponent } from './components/reusable/navigation/link/link.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { TitleComponent } from './components/reusable/title/title.component';
import { OpenTabsSectionComponent } from './components/pages/home-page/open-tabs-section/open-tabs-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    HeaderComponent,
    NavigationComponent,
    LinkComponent,
    HomePageComponent,
    TitleComponent,
    OpenTabsSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
