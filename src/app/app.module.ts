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
import { PointerComponent } from './components/reusable/pointer/pointer.component';
import { BenefitsSectionComponent } from './components/pages/home-page/benefits-section/benefits-section.component';
import { PlatformsSectionComponent } from './components/pages/home-page/platforms-section/platforms-section.component';
import { BestDealSectionComponent } from './components/pages/home-page/best-deal-section/best-deal-section.component';
import { PlanCardComponent } from './components/pages/home-page/best-deal-section/plan-card/plan-card.component';
import { JoinSectionComponent } from './components/pages/home-page/join-section/join-section.component';
import { FooterComponent } from './components/pages/home-page/join-section/footer/footer.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from './components/reusable/input/input.component';

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
    PointerComponent,
    BenefitsSectionComponent,
    PlatformsSectionComponent,
    BestDealSectionComponent,
    PlanCardComponent,
    JoinSectionComponent,
    FooterComponent,
    LoginPageComponent,
    RegisterPageComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
