import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule} from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MainNavComponent } from './layout/component/main-nav/main-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';
import {RouterModule, Routes } from '@angular/router';
import { appRoutes} from './routes';
import { AdminComponent } from './layout/component/admin/admin.component';
import { CandidateComponent } from './layout/component/candidate/candidate.component';
import { JobsComponent } from './layout/component/jobs/jobs.component';
import { ActivityComponent } from './layout/component/activity/activity.component';
import { DxButtonModule } from 'devextreme-angular';
import {
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxChartModule } from 'devextreme-angular';

import { Order, Service } from '../app/fake-db/admin';
import { CandidateDB, CandidateService  } from '../app/fake-db/candidate';
import { AdminChartService, AdminChartDB} from '../app/fake-db/adminChart';
import { CandidateChartService, CandidateChartDB} from '../app/fake-db/candidateChart';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    AdminComponent,
    CandidateComponent,
    JobsComponent,
    ActivityComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxChartModule

  ],
  providers: [
    Order,
    Service,
    CandidateDB,
    CandidateService,
    AdminChartService,
    AdminChartDB,
    CandidateChartService,
    CandidateChartDB
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
