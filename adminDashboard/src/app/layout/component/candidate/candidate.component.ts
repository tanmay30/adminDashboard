import { Component, OnInit, ViewChild } from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import { CandidateDB, CandidateService } from '../../../fake-db/candidate';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  candidateData: CandidateDB[];

  constructor(service: CandidateService) {
    this.candidateData = service.getCandidateData();
  }

  ngOnInit() {
  }

}
