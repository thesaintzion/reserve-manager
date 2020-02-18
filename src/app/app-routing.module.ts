import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/site-components/home/home.component';
import { SiteLayoutMainComponent } from './components/site-components/_layouts/site-layout-main/site-layout-main.component';
import { ClientEducationComponent } from './components/site-components/client-education/client-education.component';
import { FinancialServicesComponent } from './components/site-components/financial-services/financial-services.component';
import { SoftwareDevelopmentComponent } from './components/site-components/software-development/software-development.component';
import { ConsultancyServicesComponent } from './components/site-components/consultancy-services/consultancy-services.component';
import { FeesAndCommissionComponent } from './components/site-components/fees-and-commission/fees-and-commission.component';
import { DedicatedTradingAccountsComponent } from './components/site-components/dedicated-trading-accounts/dedicated-trading-accounts.component';
import { BonusComponent } from './components/site-components/bonus/bonus.component';
import { PageNotFoundComponent } from './components/shared-components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/site-components/register/register.component';
import { LoginComponent } from './components/site-components/login/login.component';
import { AboutUsComponent } from './components/site-components/about-us/about-us.component';




const routes: Routes = [
  {path: '', component: SiteLayoutMainComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},

    {path: 'client-education', component: ClientEducationComponent},
    {path: 'financial-services', component: FinancialServicesComponent},

    {path: 'software-development', component: SoftwareDevelopmentComponent},
    {path: 'consultancy-services', component: ConsultancyServicesComponent},
    {path: 'fees-and-commission', component: FeesAndCommissionComponent},
    {path: 'dedicated-trading-accounts', component: DedicatedTradingAccountsComponent},
    {path: 'bonus', component: BonusComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},

    {path: '404', component: PageNotFoundComponent,  data: {depth: 2, title: 'Page not found | Profile Me' }}, 
  ]},

  
  // Lazy loading
  { path: 'dashboard', loadChildren: './components/dashboard-componets/dashboard.module#DashboardModule'},
  { path: '**',  redirectTo: '/404', pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
