import { Component, OnInit ,  ViewChild } from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import { Order, Service } from '../../../fake-db/admin';

// if(!/localhost/.test(document.location.host)) {
//   enableProdMode();
// }

@Component({
  templateUrl: './admin.component.html',

  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  orders: Order[];
    saleAmountHeaderFilter: any;
   // applyFilterTypes: any;
   // currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;

  constructor(service: Service) {
    this.orders = service.getOrders();
    this.showFilterRow = true;
    this.showHeaderFilter = true;
}

clearFilter() {
    this.dataGrid.instance.clearFilter();
}


ngOnInit() {
}



}
