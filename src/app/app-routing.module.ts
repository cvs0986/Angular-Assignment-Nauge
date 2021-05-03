import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MastersComponent } from './modules/masters/masters.component';
import { PortMasterComponent } from './modules/masters/port-master/port-master.component';
import { ShippingCompanyMasterComponent } from './modules/masters/shipping-company-master/shipping-company-master.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    { path: '', component: DashboardComponent },
    { path : 'masters', component: MastersComponent },
    { path: 'port-master', component: PortMasterComponent },
    { path: 'shipping-master', component: ShippingCompanyMasterComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
