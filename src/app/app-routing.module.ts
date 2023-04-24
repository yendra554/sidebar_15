import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: "", redirectTo:'dashboard', pathMatch: 'full'},
  {path: "login", component:LoginComponent},
  {path: "signup", component:SignupComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: "products", component:ProductsComponent},
  {path: "statistics", component:StatisticsComponent},
  {path: "pages", component:PagesComponent},
  {path: "setting", component: SettingsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
