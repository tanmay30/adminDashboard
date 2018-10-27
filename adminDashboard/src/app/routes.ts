import { Routes } from '@angular/router';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';
import { AdminComponent } from './layout/component/admin/admin.component';
import { CandidateComponent } from './layout/component/candidate/candidate.component';
import { JobsComponent } from './layout/component/jobs/jobs.component';
import { ActivityComponent } from './layout/component/activity/activity.component';

export const appRoutes: Routes = [
  { path: 'home', component : DashboardComponent},
  { path: 'admin', component : AdminComponent},
  { path: 'candidate', component : CandidateComponent},
  { path: 'jobs', component : JobsComponent},
  { path: 'activity', component : ActivityComponent},
  { path : '' , redirectTo: '/home' , pathMatch: 'full'}
];
