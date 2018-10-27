import { Component, OnInit } from '@angular/core';
import { AdminChartService, AdminChartDB} from '../../../fake-db/adminChart';
import { CandidateChartService, CandidateChartDB} from '../../../fake-db/candidateChart';


@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  adminChart: AdminChartDB[];
  candidateChart: CandidateChartDB[];

  constructor(adminService: AdminChartService,
              candidateService: CandidateChartService) {
      this.adminChart = adminService.getAdminCharat();
      this.candidateChart = candidateService.getCandidateChart();
   }
   customizeTooltip(arg: any) {
    return {
        text: arg.percentText + ' - ' + arg.valueText
    };
  }
}

