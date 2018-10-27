import { Injectable } from '@angular/core';

@Injectable()
export class AdminChartService {
  getAdminCharat(): AdminChartDB[] {
      return adminChartData;
  }
}

export class AdminChartDB {
  day: string;
  oranges: number;
}

const adminChartData: AdminChartDB[] = [{
  day: 'Monday',
  oranges: 3
}, {
  day: 'Tuesday',
  oranges: 2
}, {
  day: 'Wednesday',
  oranges: 3
}, {
  day: 'Thursday',
  oranges: 4
}, {
  day: 'Friday',
  oranges: 6
}, {
  day: 'Saturday',
  oranges: 11
}, {
  day: 'Sunday',
  oranges: 4
}];





