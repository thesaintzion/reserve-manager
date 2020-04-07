import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/materials/material';
import { HomeComponent } from './components/site-components/home/home.component';
import { FinancialServicesComponent } from './components/site-components/financial-services/financial-services.component';
import { ClientEducationComponent } from './components/site-components/client-education/client-education.component';
import { FooterComponent } from './components/site-components/footer/footer.component';
import { SiteLayoutMainComponent } from './components/site-components/_layouts/site-layout-main/site-layout-main.component';
import { SiteLayoutAccountCreationComponent } from './components/site-components/_layouts/site-layout-account-creation/site-layout-account-creation.component';
import { HeaderComponent } from './components/site-components/header/header.component';
import { SoftwareDevelopmentComponent } from './components/site-components/software-development/software-development.component';
import { ConsultancyServicesComponent } from './components/site-components/consultancy-services/consultancy-services.component';
import { FeesAndCommissionComponent } from './components/site-components/fees-and-commission/fees-and-commission.component';
import { DedicatedTradingAccountsComponent } from './components/site-components/dedicated-trading-accounts/dedicated-trading-accounts.component';
import { BonusComponent } from './components/site-components/bonus/bonus.component';
import { PageNotFoundComponent } from './components/shared-components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/site-components/register/register.component';
import { ScrollUpComponent } from './components/shared-components/scroll-up/scroll-up.component';
import { LoginComponent } from './components/site-components/login/login.component';
import { AboutUsComponent } from './components/site-components/about-us/about-us.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedService } from './services/shared.service';
import { ApiService } from './services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { CarouselComponent } from './components/site-components/carousel/carousel.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinancialServicesComponent,
    ClientEducationComponent,
    FooterComponent,
    SiteLayoutMainComponent,
    SiteLayoutAccountCreationComponent,
    HeaderComponent,
    SoftwareDevelopmentComponent,
    ConsultancyServicesComponent,
    FeesAndCommissionComponent,
    DedicatedTradingAccountsComponent,
    BonusComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ScrollUpComponent,
    LoginComponent,
    AboutUsComponent,
    CarouselComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService, ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
