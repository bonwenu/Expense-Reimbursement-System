import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EmployeeHomeComponent } from './components/employee-home/employee-home.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { CreateRequestsComponent } from './components/create-requests/create-requests.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ManagerRequestsMainComponent } from './components/manager-requests-main/manager-requests-main.component';
import { LoginNavComponent } from './components/login-nav/login-nav.component';
import { EmployeeNavComponent } from './components/employee-nav/employee-nav.component';
import { ManagerNavComponent } from './components/manager-nav/manager-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { EPendingRequestsComponent } from './components/e-pending-requests/e-pending-requests.component';
import { EProcessedRequestsComponent } from './components/e-processed-requests/e-processed-requests.component';
import { MPendingRequestsComponent } from './components/m-pending-requests/m-pending-requests.component';
import { MProcessedRequestsComponent } from './components/m-processed-requests/m-processed-requests.component';
import { SpecifyEmployeeComponent } from './components/specify-employee/specify-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    EmployeeHomeComponent,
    ManagerHomeComponent,
    CreateRequestsComponent,
    EmployeeListComponent,
    ManagerRequestsMainComponent,
    LoginNavComponent,
    EmployeeNavComponent,
    ManagerNavComponent,
    EPendingRequestsComponent,
    EProcessedRequestsComponent,
    MPendingRequestsComponent,
    MProcessedRequestsComponent,
    SpecifyEmployeeComponent
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
