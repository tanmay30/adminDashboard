import { Component, OnInit } from '@angular/core';
import { AdminChartService, AdminChartDB} from '../../../fake-db/adminChart';
import { CandidateChartService, CandidateChartDB} from '../../../fake-db/candidateChart';
import { Router } from '@angular/router';


@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public showWidget1: boolean = true;
  public showWidget11: boolean = false;
  public showWidget2: boolean = true;
  public showWidget22: boolean = false;
  public showWidget3: boolean = true;
  public showWidget4: boolean = true;


  adminChart: AdminChartDB[];
  candidateChart: CandidateChartDB[];

  constructor(adminService: AdminChartService,
              candidateService: CandidateChartService,private router: Router) {
      this.adminChart = adminService.getAdminCharat();
      this.candidateChart = candidateService.getCandidateChart();
   }
   customizeTooltip(arg: any) {
    return {
        text: arg.percentText + ' - ' + arg.valueText
    };
  }

  toggleCards (item: string) {
    if ( item === 'widget1') {
      this.showWidget2 = !this.showWidget2;
        this.showWidget3 = !this.showWidget3;
        this.showWidget4 = !this.showWidget4;
        this.showWidget11 = !this.showWidget11;
    }else if ( item === 'widget2') {
      this.showWidget1 = !this.showWidget1;
        this.showWidget3 = !this.showWidget3;
        this.showWidget4 = !this.showWidget4;
        this.showWidget22 = !this.showWidget22;
    }else if ( item === 'widget3') {
      this.showWidget2 = !this.showWidget2;
        this.showWidget1 = !this.showWidget1;
        this.showWidget4 = !this.showWidget4;
        this.showWidget22 = !this.showWidget22;
        this.showWidget11 = !this.showWidget11;
    }else if ( item === 'widget4') {
      this.showWidget2 = !this.showWidget2;
        this.showWidget3 = !this.showWidget3;
        this.showWidget1 = !this.showWidget1;
        this.showWidget22 = !this.showWidget22;
        this.showWidget11 = !this.showWidget11;
    }

  }

  routeAdmin(){
    this.router.navigateByUrl('/admin');
  }

  routeCandidate(){
    this.router.navigateByUrl('/candidate')
  }
}

